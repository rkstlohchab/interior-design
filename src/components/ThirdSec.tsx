import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ThirdSec = () => {
  return (
    <>
        <Accordion 
            type="single" 
            className="w-full bg-accordion-bg bg-fill bg-center p-4 bg-opacity-50"
            collapsible
            >
            <AccordionItem value="item-1" className="bg-opacity-75 bg-accordion-bg bg-fill bg-center">
                <AccordionTrigger className="text-black font-bold py-2 px-4 rounded ">
                Architectural Design
                </AccordionTrigger>
                <AccordionContent className="text-black mt-2 p-4 bg-opacity-75">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis saepe, id praesentium repellendus blanditiis officiis necessitatibus et quos est vero alias dolores magnam libero, reiciendis iure commodi, iste inventore aspernatur explicabo fugiat soluta maxime. Molestias, ut voluptatibus magnam enim nesciunt voluptas illo quod laboriosam dolorum tenetur ea iusto libero laudantium doloribus quo et. Explicabo exercitationem deserunt sapiente nam rerum praesentium consequuntur, aperiam illo repellat blanditiis quibusdam recusandae, perferendis qui! Porro amet molestias eveniet repellendus inventore consectetur atque? Laboriosam adipisci obcaecati itaque earum dolore sapiente aut suscipit voluptas. Necessitatibus, odio fugit. Minima nam, facilis sunt rerum deserunt voluptatem quia. Quod.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        
        <Accordion 
            type="single" 
            className="w-full bg-accordion-bg-1 bg-fill bg-center p-4 bg-opacity-50"
            collapsible
            >
            <AccordionItem value="item-1" className="bg-opacity-75 bg-accordion-bg bg-fill bg-center">
                <AccordionTrigger className="text-white font-bold py-2 px-4 rounded ">
                Interior Design
                </AccordionTrigger>
                <AccordionContent className="text-white mt-2 p-4 bg-opacity-75 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem omnis libero, porro voluptate voluptatem ab sed dolorem quos. Excepturi adipisci totam nobis consequuntur consequatur amet blanditiis nesciunt ducimus veritatis porro quia voluptate numquam aut non nisi ut, laboriosam impedit, et cumque iste suscipit veniam quasi velit. Inventore molestiae placeat praesentium voluptas, consectetur sit natus atque debitis pariatur corporis ratione maiores nobis officia nostrum rem distinctio blanditiis voluptatum perferendis. Magnam aliquid rem sed incidunt hic itaque eaque, quaerat quis dolorum quam ipsam, tenetur distinctio? Pariatur, doloribus quis? Facere corrupti, molestiae minus veritatis rem esse quos dolorum ex maiores autem dicta ratione!
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion 
            type="single" 
            className="w-full bg-accordion-bg-2 bg-fill bg-center p-4 bg-opacity-50"
            collapsible
            >
            <AccordionItem value="item-1" className="bg-opacity-75 bg-accordion-bg bg-fill bg-center">
                <AccordionTrigger className="text-white font-bold py-2 px-4 rounded ">
                Interior Design
                </AccordionTrigger>
                <AccordionContent className="text-white mt-2 p-4 bg-opacity-75">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sunt quibusdam tempora tempore, ipsam impedit facere aliquid earum, maiores hic omnis pariatur autem officiis non maxime vitae blanditiis iste animi ut. Nulla recusandae eos perferendis ipsa dolore non tempore ipsam totam reprehenderit exercitationem natus, nemo neque! Consequatur debitis quod provident itaque ex repellendus, assumenda, doloremque incidunt id quam consectetur dignissimos optio laudantium officiis porro ipsum. Libero at excepturi nulla tenetur! Itaque voluptas distinctio quasi adipisci accusamus, dolores amet reprehenderit? Provident quia maxime natus debitis doloribus nemo, perspiciatis nesciunt blanditiis earum corporis nihil atque quibusdam dolores voluptatum porro ipsum amet. Nostrum!
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </>
    
  )
}

export default ThirdSec
