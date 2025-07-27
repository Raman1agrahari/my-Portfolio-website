import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({
  position,
  company,
  time,
  tech,
  address,
  work,
  companyLink,
  certificate,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      {/* // */}
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize">
            @{company}
          </a>
        </h3>
        <p className="font-medium w-full md:text-sm">{work}</p>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {tech}
        </p>
        <a
          href={companyLink}
          target="_blank"
          className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm underline">
          {certificate}
        </a>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mb-20">
      <h2 className="font-bold text-6xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full mb-20">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {/* Amandy Labs Private Limited Experience */}
          <Details
            position="Mern Stack Developer (Onsite Training)"
            company="Amandy Labs Private Limited"
            time="May 2025 - Present"
            address="Kanpur"
            work="At Amandy Labs Private Limited,Built a full-stack POS billing platform and a multi-chain Web3 DApp backend. Developed secure REST APIs using Next.js 14 App Router, implemented JWT and OTP-based authentication, and managed dynamic checkout flows with [cartId] routing. Integrated Redux Toolkit Query for frontend API handling and wrote Mongoose seeding scripts for product and user data. For the DApp, implemented wallet-based login using wagmi, built protected routes for portfolio and token tracking, and used MongoDB with Mongoose for scalable data modeling."
            tech="Tech: ReactJs, Tailwind CSS, NodeJs, ExpressJs, MongoDB, Strapi CMS, AI-enhanced tools."
            companyLink="https://amandylabs.com"
            certificate="certificate"
          />
        </ul>
      </div>
</div>
  );
};

export default Experience;