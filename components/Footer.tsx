import React, { ReactNode } from "react";

type FooterProps = {
  children: ReactNode;
};

const Footer = ({ children }: FooterProps) => {
  return (
    <footer className="w-full py-20 px-10 flex flex-row items-center justify-center">
      {children}
    </footer>
  );
};

export default Footer;
