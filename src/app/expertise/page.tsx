"use client"

import { useQuery, useMutation } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Loader from "@/components/Loader";


export default function Page() {
  // Fetch the list of expertise entries
  const expertiseList = useQuery(api.expertise.getExpertise);
  const router = useRouter();
  if (!expertiseList) {
        return <Loader />;
    }

  const handleCardClick = (expertiseId: string) => {
        router.push(`/expertise/${expertiseId}`);
    };
  

  return (
    <div className="lg:px-[120px] lg:py-[30px] max-sm:px-10 max-sm:py-5">
      <h1 className="w-full text-start text-2xl ">Expertise List</h1>
      <Separator className="my-5" />

        {expertiseList?.map((expertise) => (
        <Card 
          key={expertise._id} 
          className=" m-0 p-0 border-none shadow-none inline-block "
          onClick={() => handleCardClick(expertise._id)}
        >
            <CardHeader className="gap-2 lg:mr-10 lg:my-10 max-sm:mt-8">
                <Image src={expertise.image} alt="abc" width={350} height={350}/>
                <CardTitle className="font-normal">{expertise.title}</CardTitle>
                <CardDescription className="">{expertise.description.split(' ').slice(0, 3).join(' ')}</CardDescription>
            </CardHeader>
        </Card>
        ))}


    </div>
  );
}
