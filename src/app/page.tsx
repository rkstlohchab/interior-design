
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Log from "@/components/Log"
import SecondSec from "@/components/SecondSec"
import ThirdSec from "@/components/ThirdSec"

import { Separator } from "@/components/ui/separator"


export default function Page() {



  return (
    <>
      <Hero />
      <SecondSec />
      <ThirdSec />
      <Separator className="my-10" />
      <Log />
      <Footer />
      </>
  )
}

export const dynamic = "force-dynamic";