import React from "react";

import { Wrapper } from "bushido-strap";

import { Link } from "react-router-dom";

import Counter from "./components/Counter";

export default function ReduxCounter() {
  return (
    <Wrapper>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Counter />
    </Wrapper>
  );
}
