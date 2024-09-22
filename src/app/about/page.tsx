import Image from "next/image";

const Page = () => {
  return (
    <div className="lg:px-[120px] lg:py-[30px] max-sm:px-10 max-sm:py-5">
      <Image
            src="https://i.pinimg.com/originals/0e/82/32/0e82328f0ce045ffe96eb75b2170257f.jpg"
            alt="logo"
            width={1200}
            height={100}
        />
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

      <h1 className="text-2xl my-5">Brand vision</h1>
      <p>
        We're skilled at combining everything necessary to turn our clients'
        ideas into reality. We've been dedicated to hearing out their ideas,
        learning their vision, and working together to create efficient spaces,
        live environments, and practical design. We draw new paths by blending
        experience, creativity, craftsmanship, and passion to deliver results
        that go harmoniously. With an accumulative experience of over 15 years.
        We team up with our clients, designing departments to achieve
        environments that provide true and meaningful experiences for everyone
        on board.
      </p>
    </div>
  );
};
export default Page;
