import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className} p-[3rem]`}
    >
      {children}
    </div>
  );
};

export default Layout;
