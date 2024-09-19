import { zoomies } from 'ldrs'
import Image from 'next/image'

const Loader = () => {
  zoomies.register()
  if (typeof window === 'undefined') return null;
  return (
    <div className="z-10 flex flex-col items-center justify-center w-screen h-screen gap-2">
      <Image src="/Atom2.jpg" width={100} height={100} alt="logo" />
      <l-zoomies
        size="100"
        stroke="3"
        bg-opacity="0.1"
        speed="2"
        color="black" 
      ></l-zoomies>
    </div>
  )
}
export default Loader