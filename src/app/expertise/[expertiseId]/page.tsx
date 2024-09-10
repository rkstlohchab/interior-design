"use client";

import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { api } from "@/../convex/_generated/api";
import Image from "next/image";
import Loader from "@/components/Loader";

export default function ExpertiseDetails({ params }: any ) {
    const { expertiseId } = params;

    // Fetch the project details based on projectId
    const expertise = useQuery(api.expertise.getExpertiseById, { id: expertiseId });

    if (!expertise) {
        return <Loader />;
    }

    return (
        <div className="lg:px-[120px] lg:py-[30px] max-sm:px-10 max-sm:py-5">
            <Image src={expertise.image} alt={expertise.title} width={1200} height={1200} />
            <h1 className="text-4xl my-4">{expertise.title}</h1>
            <p>{expertise.description}</p>
        </div>
    );
}
