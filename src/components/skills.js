import React from "react";
import skills from "./content/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="mx-7">
      <h2 className="font-bold text-6xl mt-20 w-full text-center md:text-6xl md:mt-32 mb-10">
        Skills
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className=" grid grid-cols-8 sm:grid-cols-2 xs:grid-cols-2 xs:gap-x-[8rem] xs:place-items-center place-items-center md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 mb-10 ">
        {skills.map((skill, index) => {
          const Icon = skill.Icon;
          return (
            <div key={index} className="card wallet ">
              <div className="overlay "></div>
              <div className="circle   ">
                <Icon className="h-10 w-10 darok " />
              </div>
              <p className="">{skill.name}</p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

export const popUp = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};

export const FadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0, staggerChildren: 0.1 },
  },
};
