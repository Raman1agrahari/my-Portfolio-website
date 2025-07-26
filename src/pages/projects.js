import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "next/image";
import { GithubIcon } from "@/components/Icon";
 import Proj1 from "../../public/images/projects/LearnServe.png";
  import Proj2 from "../../public/images/projects/Pos.png";
// import Proj3 from "../../public/images/projects/proj3.png";
// import Proj4 from "../../public/images/projects/proj4.png";
// import Proj5 from "../../public/images/projects/proj5.png";
// import Proj6 from "../../public/images/projects/proj6.png";
// import Proj7 from "../../public/images/projects/proj7.png";
// import Proj8 from "../../public/images/projects/proj8.png";
import Transition from "@/components/Transition";
import chainweaver from "../../public/images/projects/chainweaver.png";
//import ytmp4 from "../../public/images/projects/ytmp4.png";
// import ytmp3 from "../../public/images/projects/ytmp3.png";
// import resumeParser from "../../public/images/projects/resumeParser.png";
// import aiDetector from "../../public/images/projects/ai-detector.png";
const FeaturedProject = ({ type, tech, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex item-center relative rounded-br-2xl justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-2 -right-3 -z-10 w-[101%] h-[101%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%]  xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {tech}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  hover:border-dark border-2 hover:dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light sm:px-4 sm:text-base">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ title, type, tech, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light md:p-4">
      <div className="absolute top-2 -right-3 -z-10 w-[101%] h-[101%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg ">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold  lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {tech}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base">
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>SA | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Chainweaver-Multi-Chain DApp Hub"
                tech="Tech Stack:, wagmi, ReactJs, Tailwind CSS, Redux, NodeJs, ExpressJs, MongoDB, Rest API, JWT Authentication, Bcrypt."
                img={chainweaver} // Assuming you have an image for this project
                summary="Engineered the backend infrastructure for a Web3 decentralized application (ChainWeaver) that supports wallet-based authentication and token tracking. Implemented wallet login using wagmi and JWT, managing secure sessions via localStorage for protected route access. Developed modular API services for portfolio management, trading history, and token tracking, enabling real-time dashboard updates. Used MongoDB with Mongoose for scalable and efficient multi-chain data modeling, and collaborated with the frontend team to deliver dynamic dashboards and seamless user experiences."
                link="https://github.com/Theamansinghrajput/amandyLabs_Dapp/tree/raman-1.0.1" // Your live link
                github="https://github.com/Theamansinghrajput/amandyLabs_Dapp/tree/raman-1.0.1" // Your GitHub repo link
                type="Featured project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="LearnServe"
                tech="Tech Stack: ReactJs, Tailwind CSS, NodeJs, ExpressJs, MongoDB, Rest API, JWT Authentication, Bcrypt."
                img={Proj1} // Assuming you have an image for this project
                summary="Developed a full-stack education platform enabling course management, student enrollment, and performance tracking. Implemented secure JWT-based authentication and role-based access control (RBAC) to ensure fine-grained security. The frontend was built with React.js and Tailwind CSS, resulting in responsive dashboards and a 40% improvement in load time. Designed and tested RESTful APIs using Postman with a 95% endpoint success rate, while backend performance was enhanced through optimized MongoDB queries. The application was successfully deployed with Vercel (frontend) and Render (backend)."
                link="https://github.com/Raman1agrahari/LearnServe.git" // Your live link
                github="https://github.com/Raman1agrahari/LearnServe.git" // Your GitHub repo link
                type="Featured project"
              />
            </div>
            <div className="col-span-12 md:col-span-12">
              <FeaturedProject
                title="Pos-System-Full Stack Billing and Checkout Platform"
                img={Proj2}
                tech="Tech Stack: TypeScript, ReactJs, Shadcn Ui, Redux Toolkit, Next.js, REST API"
                summary="Worked as a Backend Developer, where I developed the complete order workflow, authentication system, and data management APIs. I built modular REST APIs using Next.js 14 App Router (app/api) with secure JWT-based authentication, and implemented OTP-based login and password reset flows with custom APIs for code generation, validation, and expiry. I managed dynamic checkout flows using [cartId] dynamic routes for cart-specific order processing and wrote Mongoose-based database seeding scripts to initialize products, users, and cart data. For the frontend, I integrated Redux Toolkit Query with Axios to manage API interactions and ensured secure session persistence using localStorage for a smooth and consistent checkout experience."
                link="https://github.com/Theamansinghrajput/pos-system/tree/raman_1.0.1"
                github="https://github.com/Theamansinghrajput/pos-system/tree/raman_1.0.1"
                type="Featured project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;