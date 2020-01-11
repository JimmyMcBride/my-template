import React from "react";

import { FlexBox, Card } from "bushido-strap";

export default function Content() {
  return (
    <FlexBox width="100%" height="30vh" wrap="wrap" justify="space-around">
      <Card width="25vw" height="8rem">
        <h3>Title 1</h3>
        <p>Lorem ipsum dolor.</p>
      </Card>
      <Card dark width="25vw" height="8rem">
        <h3>Title 2</h3>
        <p>Lorem ipsum dolor.</p>
      </Card>
      <Card width="25vw" height="8rem">
        <h3>Title 3</h3>
        <p>Lorem ipsum dolor.</p>
      </Card>
      <Card dark width="25vw" height="8rem">
        <h3>Title 4</h3>
        <p>Lorem ipsum dolor.</p>
      </Card>
      <Card width="25vw" height="8rem">
        <h3>Title 5</h3>
        <p>Lorem ipsum dolor.</p>
      </Card>
      <Card dark width="25vw" height="8rem">
        <h3>Title 6</h3>
        <p>Lorem ipsum dolor.</p>
      </Card>
    </FlexBox>
  );
}
