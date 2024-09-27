"use client"
import { testimonials } from "@/constants"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"


const Review = () => {
  return (
    <div className="lg:mb-15 flex max-lg:flex-col flex-row w-full items-center bg-[#2f4462]">
      <div className="w-1/2">
        <h2 className="text-5xl text-center my-5 lg:my-10 text-white">
          WHAT OUR <br/>CLIENTS SAY
        </h2>
      </div>

      {/* <Carousel 
          className="flex flex-wrap items-center justify-center max-lg:w-full w-1/2 "
           plugins={[
              Autoplay({
              delay: 2000,
              }),
          ]}
      >
          <CarouselContent>
              {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="lg:px-6 lg:py-2">
                      <Card>
                          <CardContent className="flex flex-col aspect-square items-center justify-center p-6 ">
                              <p className="text-justify max-lg:text-sm flex flex-wrap w-2/3">{testimonial.text}</p>
                              <div className="flex mt-4">
                                  <div>
                                      <span className="text-sm font-normal italic text-neutral-600">
                                              <h1 className="text-2xl font-bold">{testimonial.user}</h1>
                                              {testimonial.company}
                                      </span>
                                  </div>
                              </div>
                          </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  
              ))}
          </CarouselContent>
          <CarouselPrevious  className="max-md:hidden"/>
          <CarouselNext className="max-md:hidden" />
      </Carousel> */}

    </div>

  )
}
export default Review

