"use client"

import Image from "next/image"


const Founder = () => {

  return (
    <div className="flex lg:px-[100px] max-lg:px-10 max-lg:flex-col max-lg:py-10 items-center">
        <div className="max-lg:w-full lg:w-1/2 flex items-center justify-center">
            <Image
                src="https://drive.google.com/uc?export=view&id=1a2bET80W5N4h-lmDhlKFmZ1f8_NqcsH-"
                alt="Picture of the author"
                width={600}
                height={600}
                className="items-center mr-10"
            />
        </div>
        <div className="max-lg:w-full lg:w-1/2 max-lg:py-10">
            <p className="max-lg:text-[14px]">
                With a unique blend of engineering expertise and creative vision, we bring a distinctive approach to interior design. Gourav&apos;s ever growing pursuit for perfection, driven by a passion for innovative problem-solving and beautiful spaces, we believe in genuine and seamless integration of highly functional and practical design
                <br/>
                <br/>
                Since 2017, Gourav Grewal has been leading a growing team of talented architects, civil engineers and interior designers. This fusion of multi domain expertise allows us to create personalized designs that seamlessly blend functionality with aesthetic appeal. 
                <br/>
                <br/>
                ATOM is synonymous with exceptional design that exceeds clients&apos; expectations and leaves lasting impressions.
                At ATOM, we pride ourselves on our ability to translate your visions into reality. Through our innovative approach and commitment to excellence, we strive to create spaces that are truly one-of-a-kind and reflect your personality and lifestyle.

            </p>
        </div>
    </div>
  )
}
export default Founder