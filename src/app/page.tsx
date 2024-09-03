import Hero from "@/components/Hero"
import SecondSec from "@/components/SecondSec"
import ThirdSec from "@/components/ThirdSec"

const page = () => {

  return (
    <div className="">
      {/* <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
      </div> */}
      <Hero />
      <SecondSec />
      <ThirdSec />
    </div>
  )
}
export default page