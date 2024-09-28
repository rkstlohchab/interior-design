"use client"
import { testimonials } from "@/constants"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import { Button } from "./ui/button"

import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Review = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 20 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".fade-up", // Trigger animation when this element enters the viewport
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse", // Play on scroll in, reverse on scroll out
        },
      }
      );
  }, []);

  return (
    <div className="lg:mb-15 flex flex-col w-screen items-center bg-[#e8e8e8] fade-up">

      <h2 className="text-lg text-center my-5 lg:my-10 text-black w-full">
        T E S T I M O N I A L S
      </h2>

      <div className="w-[90%]">
          <div className="m-10 lg:hidden">
        <Carousel
          plugins={[
                Autoplay({
                delay: 2000,
                }),
              ]}
          >
            <CarouselContent>
              
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} >
                  <div className="bg-white rounded-sm w-full h-[500px] flex flex-col items-center justify-around shadow-sm">
                    <p className="text-justify max-lg:text-sm flex flex-wrap w-2/3">{testimonial.text}</p>
                    <div className="">
                      <h3 className="text-2xl font-bold">{testimonial.user}</h3>
                      <p className="text-xxl font-bold">{testimonial.company}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}

              
            </CarouselContent>
        </Carousel>
      </div>

      <div className="m-10 max-lg:hidden">
        <Carousel
          plugins={[
                Autoplay({
                delay: 2000,
                }),
              ]}
          >
            <CarouselContent>
              
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="max-lg:hidden basis-1/3">
                  <div className="bg-white max-lg:hidden rounded-sm w-[350px] h-[500px] flex flex-col items-center justify-around shadow-sm">
                    <p className="text-justify max-lg:text-sm flex flex-wrap w-2/3">{testimonial.text}</p>
                    <div className="">
                      <h3 className="text-2xl font-bold">{testimonial.user}</h3>
                      <p className="text-xxl font-bold">{testimonial.company}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
              
            </CarouselContent>
        </Carousel>
      </div>

      </div>

    </div>

  )
}
export default Review

