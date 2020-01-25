import React from "react";

import { Card } from "bushido-strap";

export default function ContentCard({ title }) {
  return (
    <Card dark width="25vw" height="8rem">
      <h3>{title}</h3>
      <p>Lorem ipsum dolor.</p>
    </Card>
  );
}
