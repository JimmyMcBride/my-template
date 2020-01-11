import React from "react";

import { FlexBox, Button, Box, Card } from "bushido-strap";

import { increment, decrement } from "../../../store/actions/counter";

import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();

  const count = useSelector(state => state.counter.count);
  return (
    <Card width="20rem" dark>
      <Box height="2rem" />
      <Button invert onClick={() => dispatch(increment())}>
        ++
      </Button>
      <Box height="2rem" />
      <FlexBox align="center" justify="space-between" width="12rem">
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
