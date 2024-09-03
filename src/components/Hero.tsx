"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Hero = () => {
    const imageRefs = useRef<Array<HTMLDivElement | null>>([]);

    const images = [
        `/expertise/architectural_design/archi_1.jpg`,
        `/expertise/architectural_design/archi_2.jpg`,
        `/expertise/architectural_design/archi_3.jpg`,
    ];


    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        imageRefs.current.forEach((imageElement, index) => {
            if (imageElement) {
                tl.fromTo(
                    imageElement,
                    { x: '-50%', scale: 0.7, opacity: "0%" },
                    {
                        x: '0%',
                        duration: 1.7,
                        ease: 'power2.out',
                        opacity: "100%",
                    }
                ).to(
                    imageElement,
                    {
                        scale: 1.05,
                        duration: 1.5,
                        ease:  "power2.inOut",
                    }
                ).to(
                    imageElement,
                    {
                        scale: 1.1,
                        duration: 1.5,
                        ease:  "power2.inOut",
                    },"<"
                ).to(
                    imageElement, 
                    { 
                        delay: 1,
                    }
                );
            }
        });
    }, []);

    return (
        <div 
            className="lg:w-screen lg:h-screen relative overflow-hidden flex items-center justify-center m-0 p-0 box-border max-lg:h-[40vh]"
        >
            {images.map((src, index) => (
                <div
                    key={index}
                    ref={el => imageRefs.current[index] = el}
                    className="w-full h-full absolute top-0 left-0 flex justify-center items-center overflow-hidden max-lg:h-[40vh]"
                    style={{ zIndex: index }} // Ensure proper stacking order
                >
                    <Image 
                        src={src} 
                        alt={`Hero Image ${index + 1}`} 
                        layout="fill"
                        objectFit="cover" // Cover ensures the image fills the container while maintaining aspect ratio
                        quality={100}
                        priority={index === 0} 
                    />
                </div>
            ))}
        </div>
    );
};

export default Hero;
