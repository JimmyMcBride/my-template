import React from "react";

import { Card, FlexBox } from "bushido-strap";

export default function ContentCard({ title }) {
  return (
    <Card invert width="25vw">
      <h3>{title}</h3>
      <p>Lorem ipsum dolor.</p>
    </Card>
  );
}
