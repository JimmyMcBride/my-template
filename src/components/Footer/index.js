import React from "react";

import { FlexBox, Box } from "bushido-strap";
import { NavLink } from "react-router-dom";

import theme from "bushido-strap/styled/theme";

export default function Footer() {
  return (
    <FlexBox height="12vh" background={`${theme.gray2}`} width="100%">
      <Box width="3rem" />
      <FlexBox direction="column" align="center">
        <h5>Company Name</h5>
        <p>101 abstract lane</p>
        <p>City, State / Zip Code</p>
        <p>info@company.com</p>
      </FlexBox>
      <Box width="40rem" />
      <FlexBox>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Contact</NavLink>
      </FlexBox>
    </FlexBox>
  );
}
