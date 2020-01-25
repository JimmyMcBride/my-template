import React from "react";

import { FlexBox } from "bushido-strap";

export default function OverviewCard({ title }) {
  return (
    <FlexBox direction="column" align="center" justify="space-around">
      <h3>{title}</h3>
      <p>Lorem ipsum.</p>
      <p>Lorem ipsum dolor.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </FlexBox>
  );
}
