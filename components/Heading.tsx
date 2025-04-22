import React, { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return <header>{children}</header>;
};

export default Heading;
