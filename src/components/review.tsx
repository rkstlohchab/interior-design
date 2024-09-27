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


const Review = () => {
  return (
    <div className="lg:mb-15 flex flex-col w-screen h-screen items-center bg-[#e8e8e8]">

      <h2 className="text-lg text-center my-5 lg:my-10 text-black w-full ">
        T E S T I M O N I A L S
      </h2>

      <div className="m-10 ">
        <Carousel
          plugins={[
                Autoplay({
                delay: 2000,
                }),
              ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="lg:hidden">
                  <div className="bg-white lg:hidden rounded-sm w-full h-[500px] flex flex-col items-center justify-around shadow-sm">
                    <p className="text-justify max-lg:text-sm flex flex-wrap w-2/3">{testimonial.text}</p>
                    <div className="">
                      <h3 className="text-2xl font-bold">{testimonial.user}</h3>
                      <p className="text-xxl font-bold">{testimonial.company}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}

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


      <ul className="flex text-[12px] items-center">
        <li className="text-black hover:text-blue-400 active:text-blue-400">
            <Button className="bg-orange-500"><a href="https://forms.gle/YDVrxun83nFkhJst6">CONTACT US</a></Button>
        </li>
      </ul>


    </div>

  )
}
export default Review

