"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useQuery } from "convex/react";
import { api } from "@/../convex/_generated/api";
import Loader from './Loader';


// Static imports for images
import hero1 from "../../public/hero1.png";
import hero2 from "../../public/hero2.png";
import hero3 from "../../public/hero3.png";
import hero4 from "../../public/hero4.png";



const Hero = () => {
    const projectsList = [hero1, hero2, hero3, hero4];


    const imageRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        if (!projectsList) return; // Return early if projectsList is not loaded yet

        const tl = gsap.timeline({ repeat: -1 });

        imageRefs.current.forEach((imageElement, index) => {
            if (imageElement) {
                tl.fromTo(
                    imageElement,
                    { x: '-50%', scale: 0.7, opacity: "0%" },
                    {
                        x: '0%',
                        duration: 1.1,
                        ease: 'power2.inOut',
                        opacity: "100%",
                    }
                ).to(
                    imageElement,
                    {
                        scale: 1.05,
                        duration: 1.3,
                        ease:  "power2.inOut",
                    }
                ).to(
                    imageElement,
                    {
                        scale: 1.1,
                        duration: 1.3,
                        ease:  "power2.inOut",
                    }, "<"
                ).to(
                    imageElement, 
                    { 
                        delay: 1,
                    }
                );
            }
        });

        return () => {
            tl.kill(); // Cleanup the timeline when the component unmounts or updates
        };
    }); // Re-run the animation only when projectsList changes
    
    if (!projectsList) {
        return <Loader />;
    }
    return (
        <div 
            className="lg:w-screen lg:h-svh relative overflow-hidden flex items-center justify-center m-0 p-0 box-border max-lg:h-[40vh] mb-2"
        >
            {projectsList?.map((project, index) => (
                <div
                    key={index}
                    ref={el => {imageRefs.current[index] = el}}
                    className="w-full lg:h-full absolute top-0 left-0 flex justify-center items-center overflow-hidden max-lg:h-[40vh]"
                    style={{ zIndex: index }} // Ensure proper stacking order
                >
                    <Image 
                        src={project} 
                        alt={`Hero Image ${index + 1}`} 
                        layout='fill'
                        objectFit='cover'
                        quality={40}
                    />
                </div>
            ))}
        </div>
    );
};

export default Hero;
