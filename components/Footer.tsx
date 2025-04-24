import React, { ReactNode } from "react";

type FooterProps = {
  children: ReactNode;
};

const Footer = ({ children }: FooterProps) => {
  return (
    <footer className="border-0 bg-linear-to-bl from-gray-950 to-stone-950 w-full py-20 px-10 flex flex-row items-center justify-center text-white">
      {children}
    </footer>
  );
};

export default Footer;
