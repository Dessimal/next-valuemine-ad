import React from "react";

const Footer = ({ children }) => {
  return (
    <footer className="w-full py-20 px-10 flex flex-row items-center justify-center">
      {children}
    </footer>
  );
};

export default Footer;
