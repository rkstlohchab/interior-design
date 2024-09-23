import Image from "next/image";

const Page = () => {
  return (
    <>
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
          technologies that transform spaces, regardless of size, into
          versatile, efficient, and aesthetically pleasing sanctuaries.
          <br /> At Atom Designs, we are committed to leading the way in
          redefining living spaces, empowering individuals to thrive in their
          vibrant environments, whether cozy cottages or expansive abodes. With
          an accumulative experience of over 15 years. We team up with our
          clients, designing departments to achieve environments that provide
          true and meaningful experiences for everyone on board.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full ">
          <div className="bg-gray-100 p-8 text-center flex flex-col items-center">
            <h2 className="text-center text-lg font-bold mb-4">BRAND VISION</h2>
            <p className="mb-4 w-2/3">
              We are experts who integrate the skills, knowledge and experience
              needed to bring our clients&apos; ideas to life.
            </p>
            <p className="mb-4 w-2/3">
              We are eager to listen to their voices, to share their vision, and
              together, to shape spaces, environments, cities and society.
            </p>
            <p className="mb-4 w-2/3">
              We invent new possibilities by bringing together the right mix of
              experience, creativity and passion to deliver that exceeds
              expectations.
            </p>
            <p className="w-2/3">
              For 100 years, we have worked hand-in-hand with clients, designing
              solutions and environments that create truly meaningful experience
              for all.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="bg-gray-100 p-14 mb-2">
              <h2 className="text-center text-lg font-bold mb-4">
                BRAND TAGLINE
              </h2>
              <h1 className="text-center text-2xl font-bold mb-2">
                E X P E R I E N C E, I N T E G R A T E D
              </h1>
              <p className="text-center">
                Integrating accumulated proficiency to deliver rich experiences.
              </p>
            </div>
            <div className="bg-gray-100 p-8">
              <h2 className="text-center text-lg font-bold mb-4">MOTTO</h2>
              <p className="text-center mb-2">more than creative</p>
              <p className="text-center mb-2">Immutability</p>
              <p className="text-center">Fair and neutral manner</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
