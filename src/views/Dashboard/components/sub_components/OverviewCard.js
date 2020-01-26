import React from "react";

import { Card, Box } from "bushido-strap";

export default function OverviewCard({ title }) {
  return (
    <Card opacity="0.9">
      <h3>{title}</h3>
      <p>Lorem ipsum.</p>
      <p>Lorem ipsum dolor.</p>
      <Box height="1.4rem" />
    </Card>
  );
}
