"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/../convex/_generated/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Loader from "@/components/Loader";
import AccordinMy from "@/components/expertiseAccordin";

export default function Projects() {
    const projectsList = useQuery(api.projects.getProjects);
    const router = useRouter();

    if (!projectsList) {
        return <Loader />;
    }

    const handleCardClick = (projectId: any) => {
        router.push(`/projects/${projectId}`);
    };
    
    return (
        <div className="lg:px-[120px] lg:py-[30px] max-sm:px-10 max-sm:py-5 h-screen">
            <h1 className="w-full text-start text-2xl">Projects List</h1>
            <Separator className="my-5" />
            {projectsList?.map((project) => (
                <Card
                    key={project._id}
                    className="p-3 inline-block cursor-pointer items-center lg:mr-10 lg:my-10 max-sm:mt-8"
                    onClick={() => handleCardClick(project._id)}
                >
                    <CardHeader className="gap-2 ">
                        <Image
                            src={project.projectImages[0]}
                            alt={project.projectTitle}
                            quality={40}
                            width={350} height={210} className="w-[350px] max-lg:h-[140px] lg:h-[240px]"
                        />
                        <CardTitle className="font-normal ">{project.projectTitle}</CardTitle>
                        <CardDescription className="">{project.projectDescription.split(' ').slice(0, 3).join(' ')}</CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
    
}