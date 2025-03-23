import React from "react";
import {
  Box
} from "@mui/material";
import PortfolioExample1 from "../../components/exampleComponents/PortfolioExample1";

function PortfolioExamplePage1() {
  return (
    <Box
      sx={{
        minHeight: "55vh",
        display: "flex",
        // the attributes below are to center all elements on the page vertically and horizontally
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PortfolioExample1 />
    </Box>
  );
}

export default PortfolioExamplePage1;
