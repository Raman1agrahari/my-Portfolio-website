import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import Profile from "../../public/images/profile/profile3.png";
import Skills from "@/components/skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Transition from "@/components/Transition";
const about = () => {
  return (
    <>
      <Head>
        <title>SA | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="">
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 mb-10">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light ">
                About me
              </h2>
              {/* <p className=" font-medium"> Hi, I am Suyash.</p> */}
              <p className="font-medium">
                Hi, I&apos;m Raman, a Full Stack Developer with a strong foundation
                in frontend, backend, and DevOps fundamentals. I build responsive,
                scalable, and high-performance web applications using modern
                technologies.

                <br />
                <br />

                My frontend expertise includes React, Next.js, TypeScript,
                Tailwind CSS, Redux Toolkit, HTML, CSS, and JavaScript,
                helping me create clean and interactive user interfaces.

                <br />
                <br />

                On the backend, I work with Node.js, Express.js, REST APIs,
                MongoDB, SQL, Docker, Git, and cloud deployment workflows.

                <br />
                <br />

                I completed a Web Development internship at Amandy Labs Private Limited,
                where I worked as a MERN Stack Developer and developed responsive
                web applications. This experience strengthened my practical
                development skills and understanding of real-world workflows.

                <br />
                <br />

                I enjoy solving problems, optimizing application performance,
                and building efficient full-stack solutions.
              </p>
              <p className=" font-medium my-3">
                I can help you build your next dream project.
                <br />
                Let&#39;s connect.
              </p>
            </div>
            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-3 -right-3 -z-10 w-[101%] h-[101%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={Profile}
                alt="image"
                className="w-full h-auto rounded-2xl "
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <Experience />
          <Education />
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;