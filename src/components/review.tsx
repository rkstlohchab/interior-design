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




const Review = () => {
  return (
    <div className="lg:mb-20 flex flex-col w-full items-center bg-[#f1f1f1]">
      <div className="w-full">
        <h2 className="text-2xl text-center my-5 lg:my-10">
            What People are saying
        </h2>
      </div>
      <Carousel 
        className="flex flex-wrap items-center justify-center max-lg:w-full w-1/2"
        plugins={[
                        Autoplay({
                        delay: 2000,
                        }),
                    ]}
      >
          <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                  <CarouselItem className="" key={index}>
                    <div className="border-black border-2 rounded-[30px] px-6 py-2 m-5 bg-[#fffdfc] shadow">
                      <p className="text-justify max-lg:text-sm flex flex-wrap">{testimonial.text}</p>
                      <div className="flex mt-4 items-center">
                          <div>
                              <span className="text-sm font-normal italic text-neutral-600">
                              <h1 className="text-2xl font-bold">{testimonial.user}</h1>
                                      {testimonial.company}
                              </span>
                          </div>
                      </div>
                    </div>
                      
                  </CarouselItem>
              ))}
              
          </CarouselContent>
      </Carousel>

    </div>

  )
}
export default Review