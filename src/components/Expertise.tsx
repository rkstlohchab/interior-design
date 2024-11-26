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

export default function Expertise() {
  const blogList = useQuery(api.blog.getBlog);
  const router = useRouter();

  if (!blogList) {
    return <Loader />;
  }

  const handleCardClick = (blogId: string) => {
    router.push(`/blog/${blogId}`);
  };
  return (
    <>

    <div className="lg:px-[120px] lg:py-[30px] max-sm:px-10 max-sm:py-5 mb-14">
      <h1 className="w-full text-start text-2xl my-5">Our Expertise</h1>
      <p className="text-sm">
        Our main goal is to make a real difference by adding value to society.
        We focus on creating exciting experiences and places that feel timeless,
        using our knowledge gained from eight years of success in various areas.
        By understanding our clients deeply and combining our aspirations,
        wisdom, and technology, we tackle the task of constructing spaces and
        systems for the benefit of society. Top of Form
      </p>
      <Separator className="my-5" />
    
      <AccordinMy />

      <Separator className="my-5" />

      {/* {blogList?.map((blog) => (
        <Card 
          key={blog._id} 
          className=" m-0 p-0 border-none shadow-none inline-block "
          onClick={() => handleCardClick(blog._id)}
        >
            <CardHeader className="gap-2 lg:mr-10 lg:my-10 max-sm:mt-8">
                <Image src={blog.image} alt="abc" width={350} height={210} className="w-[350px] h-[210px]" quality={40}/>
                <CardTitle className="font-normal">{blog.title}</CardTitle>
                <CardDescription className="">{blog.description.split(' ').slice(0, 3).join(' ')}</CardDescription>
            </CardHeader>
        </Card>
        ))} */}
    </div>
    </>
  )
    
}