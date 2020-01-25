import React from "react";

import { NavBar, FlexBox, Box } from "bushido-strap";
import { NavLink } from "react-router-dom";

import theme from "bushido-strap/styled/theme";

export default function Nav() {
  return (
    <NavBar background={`${theme.gray2}`} justify="space-between" height="10vh">
      <FlexBox>
        <h2>Company Name</h2>
      </FlexBox>
      <FlexBox>
        <NavLink to="/">Home</NavLink>
        <Box width="3rem" />
        <NavLink to="/">About</NavLink>
        <Box width="3rem" />
        <NavLink to="/">Contact</NavLink>
      </FlexBox>
    </NavBar>
  );
}
