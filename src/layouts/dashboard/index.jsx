import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

import { Box } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import NavMovil from "./NavMovil";

const DashboardLayout = ({ children }) => {
  const lgUp = useResponsive("up", "lg");

  const between = useResponsive("between", "sm", "md");

  console.log(between);

  return (
    <Box display={"flex"} gap={5}>
      {lgUp ? <Nav /> : <NavMovil />}
      {children}
    </Box>
  );
};

export default DashboardLayout;
