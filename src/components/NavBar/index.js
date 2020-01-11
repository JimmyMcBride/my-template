import React from "react";

import { FlexBox, Box } from "bushido-strap";
import { NavLink } from "react-router-dom";

import theme from "bushido-strap/styled/theme";

export default function NavBar() {
  return (
    <FlexBox
      height="8vh"
      background={`${theme.gray2}`}
      width="100%"
      justify="space-between"
    >
      <FlexBox align="center">
        <Box width="5rem" />
        <h2>Company Name</h2>
      </FlexBox>
      <FlexBox>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Contact</NavLink>
        <Box width="3rem" />
      </FlexBox>
    </FlexBox>
  );
}
