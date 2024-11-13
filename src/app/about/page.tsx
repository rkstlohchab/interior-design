"use client";

import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const fadeUpElements = gsap.utils.toArray(".fade-up"); // Get all elements with the 'fade-up' class

    fadeUpElements.forEach((element) => {
      gsap.fromTo(
        element as Element,
        { opacity: 0, y: 20 }, // Initial state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: element as Element, // Trigger animation when this element enters the viewport
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse", // Play on scroll in, reverse on scroll out
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="lg:px-[120px] lg:py-[30px] max-sm:px-10 max-sm:py-5">
        <Image
          src="https://i.pinimg.com/originals/0e/82/32/0e82328f0ce045ffe96eb75b2170257f.jpg"
          alt="logo"
          width={1200}
          height={100}
        />
        <h1 className="text-2xl my-5">About Atom Designs</h1>
        <p>
          At ATOM, we believe that great design is built on balance, harmony, and perfect functionality—just like the smallest unit of matter itself. Like the atom, where electrons, protons, and neutrons work in perfect synchrony, our designs are a delicate blend of form and function, elegance and utility, creativity and precision.
          <br/>
          <br/>
          Founded with the vision to craft spaces that resonate with beauty and purpose, ATOM brings a unique approach to interior design. We combine timeless design principles with modern sensibilities, ensuring every project feels both current and enduring. Each space we create is a reflection of our core belief that every element must complement and enhance the others, resulting in an environment that is as visually striking as it is practical.
          <br/>
          <br/>
          Our process begins with a deep understanding of your needs and aspirations. We collaborate with you to craft designs that align with your vision and lifestyle—every detail carefully considered to ensure a seamless, harmonious result. Whether designing a tranquil home, a dynamic office, or a transformative retail space, we aim for nothing short of perfection in every project.
          <br/>
          <br/>
          At ATOM, we are committed to designing spaces where elegance and functionality coexist in perfect balance. From concept to completion, our dedicated team of designers, architects, and artisans work together to deliver spaces that elevate everyday living, enhancing your experience and bringing your vision to life.

        </p>
      </div>

      <div className="flex flex-col items-center justify-center p-4 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          <div className="bg-gray-100 p-8 text-center flex flex-col items-center fade-up">
            <h2 className="text-center text-lg font-bold mb-4">BRAND VISION</h2>
            <p className="mb-4 w-2/3">
              At ATOM, our vision is to craft spaces where elegance and functionality exist in perfect harmony.
            </p>
            <p className="mb-4 w-2/3">
              We are committed to designing environments that enhance everyday living and inspire memorable experiences.
            </p>
            <p className="mb-4 w-2/3">
              By blending timeless design principles with innovation, we create spaces that are both visually appealing and practical, tailored to modern lifestyles.
            </p>
            <p className="w-2/3">
              For many years, we have worked hand-in-hand with clients, designing
              solutions and environments that create truly meaningful experiences.
            </p>
          </div>
          

          <div className="flex flex-col justify-between">
            <div className="bg-gray-100 p-14 mb-2 fade-up">
              <h2 className="text-center text-lg font-bold mb-4">ATOM</h2>
              <p className="text-center mb-10">
                Artful Techniques Optimize Modern Design
              </p>
            </div>
            



            <div className="bg-gray-100 p-8 fade-up">
              <h2 className="text-center text-lg font-bold mb-4">MOTTO</h2>
              <p className="text-center mb-2">More than creative</p>
              <p className="text-center mb-2">Immutability</p>
              <p className="text-center">Fair and neutral manner</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
