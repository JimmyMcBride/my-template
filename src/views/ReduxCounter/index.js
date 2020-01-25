import React from "react";

import { Wrapper, FlexBox } from "bushido-strap";

import { Link } from "react-router-dom";

import Counter from "./components/Counter";

import "./styles.scss";

export default function ReduxCounter() {
  return (
    <Wrapper className="counter-wrapper">
      <FlexBox height="8vh">
        <Link to="/">
          <h1>Home</h1>
        </Link>
      </FlexBox>

      <FlexBox justify="center" align="center" height="82vh">
        <Counter />
      </FlexBox>
    </Wrapper>
  );
}
