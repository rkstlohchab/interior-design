"use client";

//this is blog page it was conflicting on name so i changed it to log

import { useQuery, useMutation } from "convex/react";
import { api } from "@/../convex/_generated/api";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

export default function Log() {
  // Fetch the list of expertise entries
  const blogList = useQuery(api.blog.getBlog);
  const router = useRouter();
  
  if (!blogList) {
    return <Loader />
  }

  const handleCardClick = (blogId: string) => {
    router.push(`/blog/${blogId}`);
  };

  return (
    <div className="lg:px-[120px] lg:py-[30px] max-sm:px-10 max-sm:py-5 h-screen">
      <h1 className="w-full text-start text-2xl my-2">Blogs</h1>

      {blogList?.map((blog) => (
        <Card
            key={blog._id}
            className="m-0 p-0 border-none shadow-none inline-block cursor-pointer"
            onClick={() => handleCardClick(blog._id)}
        >
            <CardHeader className="gap-2 lg:mr-10 lg:my-10 max-sm:mt-8">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    quality={40}
                    width={350} height={210} className="w-[350px] max-lg:h-[170px] lg:h-[210px]"
                />
                <CardTitle className="font-normal ">{blog.title}</CardTitle>
                <CardDescription className="">{blog.description.split(' ').slice(0, 3).join(' ')}</CardDescription>
            </CardHeader>
        </Card>

      ))}
    </div>
  );
}
