import React from "react";

import { FlexBox, Box } from "bushido-strap";
import { NavLink } from "react-router-dom";

import theme from "bushido-strap/styled/theme";

export default function Footer() {
  return (
    <FlexBox height="10vh" background={`${theme.gray2}`} width="100%">
      <Box width="3rem" />
      <FlexBox direction="column" align="center">
        <h5>Company Name</h5>
      </FlexBox>
      <FlexBox direction="column" align="center">
        <p>101 abstract lane</p>
        <p>City, State / Zip Code</p>
        <p>info@company.com</p>
      </FlexBox>
      <Box width="20rem" />
      <FlexBox justify="space-between" width="20rem">
        <Box>
          <NavLink to="/">Home</NavLink>
        </Box>
        <Box>
          <NavLink to="/">About</NavLink>
        </Box>
        <Box>
          <NavLink to="/">Contact</NavLink>
        </Box>
      </FlexBox>
    </FlexBox>
  );
}
