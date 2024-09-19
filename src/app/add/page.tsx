"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { Input } from "@/components/ui/input";
import { api } from "@/../convex/_generated/api"; // Import from Convex auto-generated API
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Add() {
  // Create a mutation hook for addExpertise
  const addExpertiseMutation = useMutation(api.blog.addBlog);
  const addProjectsMutation = useMutation(api.projects.addProject);

  // State for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(""); // For a single image URL

  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImages, setProjectImages] = useState<string[]>([]); // Array for multiple image URLs
  const [currentImage, setCurrentImage] = useState(""); // To hold the currently typed image URL

  // Handle form submission for Expertise
  const handleAddExpertise = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on form submission
    try {
      const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
      const match = image.match(regex);
      
      const newImg = match && match[1] ? `https://drive.google.com/uc?export=view&id=${match[1]}` : "";
      const result = await addExpertiseMutation({ title, description, image: newImg });

      console.log("Blog added:", result);
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  // Handle adding a new image URL to the projectImages array
  const handleAddImage = () => {
    const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
    const match = currentImage.match(regex);
    
    if (match && match[1]) {
      const imageId = `https://drive.google.com/uc?export=view&id=${match[1]}`;
      setProjectImages((prevImages) => [...prevImages, imageId]);
      setCurrentImage(""); // Clear the input after adding
    } else {
      // Return null if the format is incorrect or the ID is not found
      return null;
    }
  };

  // Handle form submission for Projects (with multiple image links)
  const handleAddProjects = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await addProjectsMutation({ projectTitle, projectDescription, projectImages });
      console.log("Projects added:", result);
    } catch (error) {
      console.error("Error adding projects:", error);
    }
  };


  return (
    <div className="p-5 w-screen h-screen">
      <form onSubmit={handleAddExpertise} className="h-1/2">
        <h1 className="text-center w-full text-2xl font-bold">Add Blog</h1>
        <div>
          <label>Title:</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div>
          <label>Description:</label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>
        <div>
          <label>Image URL:</label>
          <Input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL"
          />
        </div>
        <Button type="submit" className="mt-2">Add Blog</Button>
      </form>

      <form onSubmit={handleAddProjects} className="h-1/2">
        <h1 className="text-center w-full text-2xl font-bold">Add Projects</h1>
        <div>
          <label>Title:</label>
          <Input
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            placeholder="Enter project title"
          />
        </div>
        <div>
          <label>Description:</label>
          <Textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            placeholder="Enter project description"
          />
        </div>
        <div>
          <label>Add Image URL:</label>
          <Input
            value={currentImage}
            onChange={(e) => setCurrentImage(e.target.value)}
            placeholder="Enter image URL"
          />
          <Button type="button" className="mt-2" onClick={handleAddImage}>Add Image</Button>
        </div>
        <div>
          <h3>Added Images:</h3>
          <ul>
            {projectImages.map((img, index) => (
              <li key={index}>{img}</li>
            ))}
          </ul>
        </div>
        <Button type="submit" className="mt-2">Add Projects</Button>
      </form>
    </div>
  );
}
