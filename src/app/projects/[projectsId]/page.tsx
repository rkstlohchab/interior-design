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
import { Card, CardContent } from "@/components/ui/card";


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

    console.log(project.projectImages);

    return (
        <div className="lg:px-[120px] lg:py-[30px] max-sm:px-10 max-sm:py-5 ">
            {/* <Image src={project.projectImages[0]} alt={project.projectTitle} width={1200} height={1200} quality={40}/> */}

            
            <div className="w-full lg:h-[800px] max-lg:h-[400px] flex justify-center items-center overflow-hidden">
                <Carousel 
                    className="w-full max-w-m"
                     plugins={[
                        Autoplay({
                        delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {project.projectImages?.map((projectImages, index) => (
                            <CarouselItem key={index} className="flex items-center border-none">

                                    {/* <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6 ">
                                            
                                        </CardContent>
                                    </Card> */}

                                    <Image src={projectImages} alt={project.projectTitle} width={1200} height={1100} className="w-[100%] max-md:items-center max-md:justify-center"/>

                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious  className="max-md:hidden"/>
                    <CarouselNext className="max-md:hidden" /> */}
                </Carousel>
            </div>

            <Separator className="my-5" />

            <h1 className="text-4xl my-4">{project.projectTitle}</h1>
            <p dangerouslySetInnerHTML={{ __html: project.projectDescription.replace(/\n/g, '<br />') }} />

            
        </div>
    );
}
