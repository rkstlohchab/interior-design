import Image from "next/image";

const Page = () => {
  return (
    <div className="lg:px-[120px] lg:py-[30px] max-sm:px-10 max-sm:py-5">
      {/* <Image
            src="https://upload.wikimedia.org/wikipedia/commons/2/27/Nikken_Sekkei_company_logo.svg"
            alt="logo"
            width={100}
            height={100}
        /> */}
      <h1 className="text-2xl my-5">About Atom Designs</h1>
      <p className="">
        We aim to revolutionize how all spaces are utilized, creating
        environments that inspire comfort and style. Our futuristic mindset
        drives us to envision and implement cutting-edge designs and
        technologies that transform spaces, regardless of size, into versatile,
        efficient, and aesthetically pleasing sanctuaries.
        <br /> At Atom Designs, we are committed to leading the way in
        redefining living spaces, empowering individuals to thrive in their
        vibrant environments, whether cozy cottages or expansive abodes. With an
        accumulative experience of over 15 years. We team up with our clients,
        designing departments to achieve environments that provide true and
        meaningful experiences for everyone on board.
      </p>

      {/* <div className="flex max-lg:flex-col my-10">
        <p className="w-1/2">
          Having completed both a Bachelor&apos;s and Master&apos;s degree in
          Civil Engineering, with my thesis centered entirely on genuine
          problem-solving, my journey commenced as an engineer. Driven by my
          love for design, I transitioned to interior aesthetics. <br/>Since 2017, I
          have led a talented team of architects, civil engineers, and interior
          designers. We aim to create personalized designs that align with my
          values and our company&apos;s unique offerings. Through our fusion of
          innovation and aesthetic sensibility, we provide people with an
          exceptional design experience that they will r e m e m b e r.
        </p>
        <Image
          src="/Atom2.png"
          alt="logo"
          width={1000}
          height={500}
          className="w-1/2"
        />
      </div> */}
    </div>
  );
};
export default Page;
