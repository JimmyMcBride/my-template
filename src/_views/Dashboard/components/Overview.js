import React from "react";

import { FlexBox } from "bushido-strap";

export default function Overview() {
  return (
    <FlexBox width="100%" height="20vh" justify="space-around" align="center">
      <FlexBox direction="column" align="center">
        <h3>Title 1</h3>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum dolor.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </FlexBox>
      <FlexBox direction="column" align="center">
        <h3>Title 2</h3>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum dolor.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </FlexBox>
      <FlexBox direction="column" align="center">
        <h3>Title 3</h3>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum dolor.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </FlexBox>
      <FlexBox direction="column" align="center">
        <h3>Title 4</h3>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum dolor.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </FlexBox>
    </FlexBox>
  );
}
