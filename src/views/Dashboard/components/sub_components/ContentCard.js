import React from "react";

import { Card } from "bushido-strap";

export default function ContentCard({ title }) {
  return (
    <Card invert width="25vw" margin="0 0 3rem 0" opacity="0.97">
      <h3>{title}</h3>
      <p>Lorem ipsum dolor.</p>
    </Card>
  );
}
