import React from "react";

import { FlexBox, Button, Box, Card } from "bushido-strap";

import { increment, decrement } from "../../../store/actions/count";

import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();

  const count = useSelector(state => state.counter.count);
  return (
    <Card invert width="20rem">
      <Box height="2rem" />
      <Button invert onClick={() => dispatch(increment())}>
        ++
      </Button>
      <Box height="2rem" />
      <FlexBox
        className="count-display"
        align="center"
        justify="center"
        stretch
      >
        Clicked <code>{count}</code> times!!!
      </FlexBox>
      <Box height="2rem" />
      <Button invert onClick={() => dispatch(decrement())}>
        --
      </Button>
      <Box height="2rem" />
    </Card>
  );
}
