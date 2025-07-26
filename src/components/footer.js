import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
   <footer className="w-full mt-20 border-t-2 border-solid border-dark dark:border-light font-medium text-md dark:text-light sm:text-base">
      <div className="w-full h-40 flex items-center justify-center">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
