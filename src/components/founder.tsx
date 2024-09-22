import Image from "next/image"

const Founder = () => {
  return (
    <div className="flex lg:px-[100px] max-lg:px-10 max-lg:flex-col lg:py-[100px] max-lg:py-10 items-center">
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
            <p className="max-lg:text-[14px]">Having completed both a Bachelor&apos;s and Master&apos;s degree
                in Civil Engineering, with my thesis centered entirely on
                genuine problem-solving, my journey commenced as an
                engineer. Driven by my love for design, I transitioned to
                interior aesthetics.<br/><br/>
                Since 2017, I have led a talented team of architects, civil
                engineers, and interior designers. We aim to create
                personalized designs that align with my values and our
                company&apos;s unique offerings. Through our fusion of
                innovation and aesthetic sensibility, we provide people
                with an exceptional design experience that they will<br/>
                remember.

            </p>
        </div>
    </div>
  )
}
export default Founder