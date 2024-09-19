"use client";

import { useQuery } from "convex/react";
import Autoplay from "embla-carousel-autoplay"
import { Separator } from "@/components/ui/separator"


import { api } from "@/../convex/_generated/api";
import Image from "next/image";
import Loader from "@/components/Loader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react";


export default function ProjectDetails({ params }: any ) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);
    const { projectsId } = params;

    // Fetch the project details based on projectId
    const project = useQuery(api.projects.getProjectById, { id: projectsId });

    if (!project || !project.projectImages && isLoading) {
        return <Loader />;
    }

    return (
        <div className="lg:px-[120px] lg:py-[30px] max-sm:px-10 max-sm:py-5 ">
            <Image src={project.projectImages[0]} alt={project.projectTitle} width={1200} height={1200} />
            <h1 className="text-4xl my-4">{project.projectTitle}</h1>
            <p>{project.projectDescription}</p>

            <Separator className="my-5" />
            <div className="w-full h-[400px] flex justify-center items-center bg-[rgb(241,241,241)]">
                <Carousel 
                    plugins={[
                        Autoplay({
                        delay: 2000,
                        }),
                    ]}
                >
                    <CarouselPrevious className="max-lg:hidden"/>

                    <CarouselContent className="justify-center items-center">
                    {project.projectImages.map((image: string, index: number) => (
                        <CarouselItem key={index}>
                            <div className="flex justify-center items-center">
                                <Image src={image} alt={project.projectTitle} width={300} height={200} className="max-md:w-[70%] max-md:items-center max-md:justify-center"/>
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>

                    <CarouselNext className="max-lg:hidden"/>
                </Carousel>
            </div>

            
        </div>
    );
}
