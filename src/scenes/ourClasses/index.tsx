import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/img/image1.png";
import image2 from "@/img/image2.png";
import image3 from "@/img/image3.png";
import image4 from "@/img/image4.png";
import image5 from "@/img/image5.png";
import image6 from "@/img/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";


type props = {
  setSelectedPage: (value: SelectedPage) => void;
};


const classes: Array<ClassType> = [
  {
    name: "Weihgt Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab, recusandae consectetur earum quae iusto deserunt.",
    image: image1
  },

  {
    name: "Pilates Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab, recusandae consectetur earum quae iusto deserunt.",
    image: image2
  },

  {
    name: "Ab Core Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab, recusandae consectetur earum quae iusto deserunt.",
    image: image3
  },

  {
    name: "Diet Nutrition Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab, recusandae consectetur earum quae iusto deserunt.",
    image: image4
  },

  {
    name: "Fitness Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab, recusandae consectetur earum quae iusto deserunt.",
    image: image5
  },

  {
    name: "Yoga Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab, recusandae consectetur earum quae iusto deserunt.",
    image: image6
  },

]


const ourClasses = ({setSelectedPage}: props) => {
  return <section
          id="ourclasses" className="w-full bg-primary-100 py-40"> 
          <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
          >
            <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >

              <div>
                <HText>Our Classes</HText>
                <p className="py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Officia ab, recusandae consectetur earum quae iusto deserunt, 
                  mollitia ut minus nostrum veniam beatae voluptate dolorem necessi
                  tatibus aliquid cum impedit porro rerum!</p>
              </div>
            </motion.div>

            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
              <ul className="w-[2800px] whitespace-nowrap">
                {classes.map((item: ClassType, index) => (
                  <Class
                  key={`${item.name}-${index}`}
                  name={`${item.name}`}
                  description={`${item.description}`}
                  image={`${item.image}`}
                  />
                ))}
                
              </ul>
            </div>

          </motion.div> 
         </section>
};


export default ourClasses;