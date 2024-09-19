"use client"

import Blog from "@/components/blog"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Loader from "@/components/Loader"
import SecondSec from "@/components/SecondSec"
import ThirdSec from "@/components/ThirdSec"
import { Separator } from "@/components/ui/separator"
import { useState, useEffect } from "react"


const Page = () => {

  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }, []);
  
    if(isLoading) {
      return <Loader />
    }

  return (
    <div className="">
      <Hero />
      <SecondSec />
      <ThirdSec />
      <Separator className="my-10" />
      <Blog />
      <Footer />
    </div>
  )
}
export default Page