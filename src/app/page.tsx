import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Loader from "@/components/Loader"
import SecondSec from "@/components/SecondSec"
import ThirdSec from "@/components/ThirdSec"
import Blog from "@/components/Blog"
import { Separator } from "@/components/ui/separator"


export default function Page() {



  return (
    <>
      <Hero />
      <SecondSec />
      <ThirdSec />
      <Separator className="my-10" />
      <Blog/>
      <Footer />
      </>
  )
}

export const dynamic = "force-dynamic";