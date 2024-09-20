"use client";

import { useQuery } from "convex/react";
import { api } from "@/../convex/_generated/api";
import Image from "next/image";
import Loader from "@/components/Loader";

export default function ExpertiseDetails({ params }: any ) {
    const { blogId } = params;

    // Fetch the project details based on projectId
    const blog = useQuery(api.blog.getBlogById, { id: blogId });

    if (!blog) {
        return <Loader />;
    }

    return (
        <div className="lg:px-[120px] lg:py-[30px] max-sm:px-10 max-sm:py-5">
            <Image src={blog.image} alt={blog.title} width={1200} height={1200} className="" />
            <h1 className="text-4xl my-4">{blog.title}</h1>
            <p>{blog.description}</p>
        </div>
    );
}
