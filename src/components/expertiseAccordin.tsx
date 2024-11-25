"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordinMy = () => {
  return (
    <>
      <Accordion
        type="single"
        className="w-full bg-accordion-bg bg-fill bg-center p-4 "
        collapsible
      >
        <AccordionItem
          value="item-1"
          className="bg-accordion-bg bg-fill bg-center"
        >
          <AccordionTrigger className="text-white py-2 px-4 rounded ">
            Architectural Design
          </AccordionTrigger>
          <AccordionContent className="text-white mt-2 lg:p-20 max-lg:p-4 flex flex-wrap bg-opacity-75">
            Atom Design excels because experts from architecture, urban design,
            and environmental fields collaborate to design with a broad
            perspective. Guided by our firm philosophy, we aim to create
            architectural designs that set global standards. For each project,
            we form a team of experts, including architects, planners, and
            engineers. Using their expertise and experiences, along with
            evidence-based discussions, we propose innovative solutions tailored
            to our clients. With extensive experience in various projects, from
            offices to hotels and historic buildings, we utilise IT and AI to
            enhance our efficiency. Our focus on urban design and architecture
            promotes healthy and cultural lifestyles while contributing
            positively to the environment.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        className="w-full bg-accordion-bg-1 bg-fill bg-center p-4 bg-opacity-50"
        collapsible
      >
        <AccordionItem
          value="item-1"
          className="bg-opacity-75 bg-accordion-bg bg-fill bg-center"
        >
          <AccordionTrigger className="text-white  py-2 px-4 rounded ">
            Interior Design
          </AccordionTrigger>
          <AccordionContent className="text-white mt-2 lg:p-20 max-lg:p-4 bg-opacity-75 ">
            For over 6 years, Atom Design has led the way in interior design.
            Today, it&apos;s clear that interior design plays a crucial role in
            shaping lifestyles and work environments. In our interior design
            approach, we prioritise both aesthetics and decorativeness. While we
            draw inspiration from designs and trends both in India and abroad,
            we value the unique sensibilities and sustainability of Indian
            culture. At Atom Design, our interior solutions are crafted using a
            blend of technology and expertise in each specialised area. We
            promise to deliver interior designs that are not only high-quality
            but also expressive, surpassing the expectations of our clients.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        className="w-full bg-accordion-bg-2 bg-fill bg-center p-4 bg-opacity-50"
        collapsible
      >
        <AccordionItem
          value="item-1"
          className="bg-opacity-75 bg-accordion-bg bg-fill bg-center"
        >
          <AccordionTrigger className="text-white  py-2 px-4 rounded ">
            Civil Engineering
          </AccordionTrigger>
          <AccordionContent className="text-white mt-2 lg:p-20 max-lg:p-4 bg-opacity-55">
            Atom Design has a lot of experience in planning and designing city
            infrastructure like buildings and underground facilities. We&apos;ve
            worked on various projects, such as apartments, villas, offices, and
            more. We&apos;re also experts in making sure buildings in crowded areas
            have enough space between them and are safe to build, especially on
            soft ground. We can check the soil&apos;s quality and suggest solutions
            if it&apos;s contaminated. Our expertise also extends to helping prevent
            floods and considering the environment in urban and regional
            development. For large-scale construction and development projects
            that are really complicated, it&apos;s super important to have experts in
            design, structure, MEP design, urban planning, and landscape design
            all working together. Atom Design has all these experts in-house, so
            we can offer a complete service. To handle the growing complexity of
            projects, we created the Digital Design Lab (DDL) and the Digital
            Design Development Centre (3D Centre). These teams use the latest
            technology, like computers and AI, to design things digitally. We
            have established these organisations internally for the first time
            in the industry, and they have been used in actual projects,
            receiving many international awards.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        className="w-full bg-accordion-bg-4 bg-fill bg-center p-4 bg-opacity-50"
        collapsible
      >
        <AccordionItem
          value="item-1"
          className="bg-opacity-75 bg-accordion-bg-4 bg-fill bg-center"
        >
          <AccordionTrigger className="text-white stroke-black  py-2 px-4 rounded ">
            Urban
          </AccordionTrigger>
          <AccordionContent className="text-white stroke-black mt-2 lg:p-20 max-lg:p-4 bg-opacity-75">
            Atom Design is dedicated to creating urban spaces that are sustainable, functional, and aesthetically pleasing. Our urban design team works on a variety of projects, from small community spaces to large city planning initiatives. We focus on integrating green spaces, enhancing public transportation, and promoting walkability to create vibrant, livable cities. By collaborating with local governments, developers, and communities, we ensure that our designs meet the needs of all stakeholders. Our approach combines innovative design principles with a deep understanding of urban dynamics, resulting in spaces that foster social interaction, economic growth, and environmental sustainability.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        className="w-full bg-accordion-bg-5 bg-fill bg-center p-4 bg-opacity-50"
        collapsible
      >
        <AccordionItem
          value="item-1"
          className="bg-opacity-75 bg-accordion-bg-5 bg-fill bg-center"
        >
          <AccordionTrigger className="text-white  py-2 px-4 rounded ">
            Structural
          </AccordionTrigger>
          <AccordionContent className="text-white mt-2 lg:p-20 max-lg:p-4 bg-opacity-75">
            Even if buildings look good and work well, they&apos;re not
            meaningful unless they&apos;re safe. Making sure buildings are safe
            relies on structural design. At Atom Design, our structural
            engineering team is always working on cutting-edge designs using
            advanced technology. We&apos;re committed to constantly improving
            our technology for now and in the future. We&apos;ll keep pushing
            the boundaries of structural design, including for really tall
            buildings and offices in areas prone to earthquakes. We&apos;ll
            adapt to changing needs and the increasing risk of natural
            disasters. Our goal is to share the joy of our buildings with
            everyone involved in making them happen.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        className="w-full bg-accordion-bg-3 bg-fill bg-center p-4 bg-opacity-50"
        collapsible
      >
        <AccordionItem
          value="item-1"
          className="bg-opacity-75 bg-accordion-bg-3 bg-fill bg-center"
        >
          <AccordionTrigger className="text-gray-200 stroke-black  py-2 px-4 rounded ">
            Landscape
          </AccordionTrigger>
          <AccordionContent className="text-gray-200 stroke-black mt-2 lg:p-20 max-lg:p-4 bg-opacity-75">
            As the world changes rapidly, people are paying more attention to
            the connection between humans and nature, and landscape design is
            key to this. Atom Design has excellent landscape design abilities,
            influenced by India&apos;s unique blend of history and nature. We
            use these skills for landscape projects worldwide, from small
            gardens to big public spaces. Our goal is to improve the lives of
            local communities, bring life back to cities, and create lively
            places to live. We do this by combining expert knowledge from
            different fields with our technology to create landscapes that
            reflect local nature and culture. Our landscape projects have had
            significant impacts on the environment, economy, and society.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        className="w-full bg-accordion-bg-6 bg-fill bg-center p-4 bg-opacity-50"
        collapsible
      >
        <AccordionItem
          value="item-1"
          className="bg-opacity-75 bg-accordion-bg-6 bg-fill bg-center"
        >
          <AccordionTrigger className="text-white  py-2 px-4 rounded ">
            Solution
          </AccordionTrigger>
          <AccordionContent className="text-white mt-2 p-4 bg-opacity-75">
            Atom Design has a bunch of experts in-house, like architects, planners, and engineers. They&apos;re great at coming up with the best designs for everything, from interiors to entire cities. We work closely with clients to find solutions that make the most of their resources while thinking about how buildings and cities will be used over time.
Activity design makes sure spaces are fun and innovative. Workplace design uses our knowledge of architecture and space to create cool places where people can share ideas.
We also focus on making buildings safer by analysing their structure and suggesting improvements. And we help the environment by checking energy use and suggesting ways to save energy

          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        className="w-full bg-accordion-bg-1 bg-fill bg-center p-4 bg-opacity-50"
        collapsible
      >
        <AccordionItem
          value="item-1"
          className="bg-opacity-75 bg-accordion-bg-1 bg-fill bg-center"
        >
          <AccordionTrigger className="text-white  py-2 px-4 rounded ">
            Consultancy
          </AccordionTrigger>
          <AccordionContent className="text-white mt-2 p-4 bg-opacity-75">
            Atom Designs offers expert consultancy in telephonic and on-site supervision for a wide range of projects. Our services ensure precision in execution, from conceptualization to completion. We specialize in guiding design implementations, providing real-time support, and ensuring projects align with client expectations and industry standards.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
export default AccordinMy