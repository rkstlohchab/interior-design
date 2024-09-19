"use client"

import { useQuery, useMutation } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Id } from "../../../convex/_generated/dataModel";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";



export default function Delete() {
  // Fetch the list of expertise entries
  const expertiseList = useQuery(api.blog.getBlog);
  const projectList = useQuery(api.projects.getProjects);
  
  // Mutation to delete an expertise entry
  const deleteExpertiseMutation = useMutation(api.blog.deleteBlog);
  const deleteProjectMutation = useMutation(api.projects.deleteProjects);

  const handleDeleteExpertise = async (id: Id<"blog">) => {
    try {
      await deleteExpertiseMutation({ id });
      console.log("Expertise deleted successfully");
    } catch (error) {
      console.error("Error deleting expertise:", error);
    }
  };
  const router = useRouter();


  const handleDeleteProjects = async (id: Id<"projects">) => {
    try {
      await deleteProjectMutation({ id });
      console.log("Expertise deleted successfully");
    } catch (error) {
      console.error("Error deleting expertise:", error);
    }
  };

  const handleCardClick = (blogId: string) => {
    router.push(`/blog/${blogId}`);
  };

  
  return (
    <div className="h-screen w-screen">
      <h1 className="text-center w-full text-2xl font-bold">Blog List</h1>
      <ul>
        {expertiseList?.map((blog) => (
          <>
              <Card 
                key={blog._id} 
                className=" m-0 p-0 border-none shadow-none inline-block "
                onClick={() => handleCardClick(blog._id)}
              >
                  <CardHeader className="gap-2 lg:mr-10 lg:my-10 max-sm:mt-8">
                      <Image src={blog.image} alt="abc" width={350} height={210} className="w-[350px] h-[210px]"/>
                      <CardTitle className="font-normal">{blog.title}</CardTitle>
                      <CardDescription className="">{blog.description.split(' ').slice(0, 3).join(' ')}</CardDescription>
                  </CardHeader>
              </Card>
              <Button onClick={() => handleDeleteExpertise(blog._id)} className="mt-5">
                    Delete
              </Button>
        </>
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
