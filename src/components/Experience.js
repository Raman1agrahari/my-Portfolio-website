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
          <Details
            position="MERN Stack Developer (Onsite Internship)"
            company="Amandy Labs Private Limited"
            time="Jul 2025 – Dec 2025"
            address="Kanpur"
            work="Built a scalable full-stack POS billing platform using Next.js, React.js, Node.js, Express.js, MongoDB, and TypeScript. Developed secure JWT and OTP-based authentication, REST APIs, dynamic checkout workflows, and Redux Toolkit Query integration. Worked with Docker, AWS EC2, AWS S3, GitHub Actions, CI/CD fundamentals, Nginx, Apache, and Redis for deployment, server configuration, caching, and performance optimization."
            tech="Tech: React.js, Next.js, Tailwind CSS, TypeScript, Node.js, Express.js, MongoDB, Redux Toolkit, REST APIs, Docker, AWS, GitHub Actions, Nginx, Redis."
            companyLink="https://drive.google.com/file/d/17p4nlhjfxDzLCvOBSBka8kXfKrvuj-o4/view"
            certificate="certificate"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;