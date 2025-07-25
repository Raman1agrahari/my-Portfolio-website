import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { LinkArrow } from "@/components/Icon";
import Transition from "@/components/Transition";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Raman Agrahari</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../public/images/img.ico" />
      </Head>
      <Transition />
      <main className="flex font-mont items-center text-dark w-full dark:text-light min-h-screen">
        <Layout className="pt-0 md:!pt-16 sm:!pt-8 mb-[8rem]">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Image"
                className="w-[70%] h-auto lg:!hidden md:!inline-block md:!w-[60] mb-8 "
                priority
                sizes="(max-width:400px) 50vw, (max-width:400px) 45vw, 45vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:!w-full lg:text-center ">
              <AnimatedText
                text="Hi, I'm Raman, a passionate Web Developer."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base  font-medium md:text-sm sm:text-xs">
                I turn creative ideas into reality with responsive front-end
                designs and scalable solutions. I focus on building efficient
                systems that handle increasing demands seamlessly, ensuring high
                performance and reliability across both front-end and back-end
                development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://drive.google.com/file/d/1qeQ91o3ZYfzdADYADAEZckEgVbpNlhNF/view?usp=sharing"
                  target={"_blank"}
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark  border-solid border-transparent hover:border-dark border-2 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md-px-4 md:text-base ">
                  Resume <LinkArrow className={"w-6 ml-1 "} />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  href="mailto:ramanag172001@gmail.com">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
