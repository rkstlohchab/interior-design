
import Footer from "@/components/Footer"
import Founder from "@/components/founder"
import Hero from "@/components/Hero"
import Log from "@/components/Log"
import Review from "@/components/review"
import SecondSec from "@/components/SecondSec"
import ThirdSec from "@/components/ThirdSec"

import { Separator } from "@/components/ui/separator"


export default function Page() {



  return (
    <>
      <Hero />
      <SecondSec />
      <ThirdSec />
      <Founder />
      {/* <Separator  /> */}
      <Review />
      {/* <Log /> */}
      <Footer />
      </>
  )
}

export const dynamic = "force-dynamic";