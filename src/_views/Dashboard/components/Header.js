import React from "react";

import { FlexBox, Box, Button } from "bushido-strap";

import theme from "bushido-strap/styled/theme";

export default function Header() {
  return (
    <FlexBox
      width="100%"
      height="30vh"
      background={`${theme.blue3}`}
      justify="center"
      align="center"
      direction="column"
    >
      <Box>
        <h1>Header Goes Here</h1>
      </Box>
      <Box height="2rem" />
      <Box width="80%">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Box>
      <FlexBox>
        <Button>Click here</Button>
        <Box width="2rem" />
        <Button invert>No, click here!</Button>
      </FlexBox>
    </FlexBox>
  );
}
