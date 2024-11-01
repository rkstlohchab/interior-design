
import Footer from "@/components/Footer"
import Founder from "@/components/founder"
import Hero from "@/components/Hero"
import InfiniteSlider from "@/components/infinteSlider"
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
      {/* <InfiniteSlider /> */}
      <Review />
      {/* <Log /> */}
      </>
  )
}

export const dynamic = "force-dynamic";