import React from "react";
import Navbar from "./navbar/navbar";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
      {/* // some other componets */}
    </>
  );
};

export default Layout;
