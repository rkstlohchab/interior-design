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


export default function ProjectDetails({ params }: any ) {
    const { projectsId } = params;

    // Fetch the project details based on projectId
    const project = useQuery(api.projects.getProjectById, { id: projectsId });

    if (!project) {
        return <Loader />;
    }

    return (
        <div className="lg:px-[120px] lg:py-[30px] max-sm:px-10 max-sm:py-5">
            <Image src={project.projectImages[0]} alt={project.projectTitle} width={1200} height={1200} />
            <h1 className="text-4xl my-4">{project.projectTitle}</h1>
            <p>{project.projectDescription}</p>

            <Separator className="my-5" />
            <Carousel 
                className=" my-5"
                plugins={[
                    Autoplay({
                    delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                {project.projectImages.map((image: string, index: number) => (
                    <CarouselItem key={index}>
                        <Image src={image} alt={project.projectTitle} width={1200} height={1200}/>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>

            
        </div>
    );
}
