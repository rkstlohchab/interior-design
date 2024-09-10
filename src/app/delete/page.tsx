"use client"

import { useQuery, useMutation } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Id } from "../../../convex/_generated/dataModel";
import Image from "next/image";

export default function Delete() {
  // Fetch the list of expertise entries
  const expertiseList = useQuery(api.expertise.getExpertise);
  const projectList = useQuery(api.projects.getProjects);
  
  // Mutation to delete an expertise entry
  const deleteExpertiseMutation = useMutation(api.expertise.deleteExpertise);
  const deleteProjectMutation = useMutation(api.projects.deleteProjects);

  const handleDeleteExpertise = async (id: Id<"expertise">) => {
    try {
      await deleteExpertiseMutation({ id });
      console.log("Expertise deleted successfully");
    } catch (error) {
      console.error("Error deleting expertise:", error);
    }
  };

  const handleDeleteProjects = async (id: Id<"projects">) => {
    try {
      await deleteProjectMutation({ id });
      console.log("Expertise deleted successfully");
    } catch (error) {
      console.error("Error deleting expertise:", error);
    }
  };

  return (
    <div className="h-screen w-screen">
      <h1 className="text-center w-full text-2xl font-bold">Expertise List</h1>
      <ul>
        {expertiseList?.map((expertise) => (
          <li key={expertise._id}> {/* Use the _id field */}
            <h3>{expertise.title}</h3>
            <p>{expertise.description}</p>
            <Image src={expertise.image} alt="abc" width={100} height={100} />
            <Button onClick={() => handleDeleteExpertise(expertise._id)} className="mt-5">
              Delete
            </Button>
          </li>
        ))}
      </ul>


      <h1 className="text-center w-full text-2xl font-bold">Projects List</h1>
      <ul>
        {projectList?.map((projects) => (
          <li key={projects._id}> {/* Use the _id field */}
            <h3>{projects.projectTitle}</h3>
            <p>{projects.projectDescription}</p>
            <Image src={projects.projectImages[0]} alt="abc" width={100} height={100} />
            <Button onClick={() => handleDeleteProjects(projects._id)} className="mt-5">
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
