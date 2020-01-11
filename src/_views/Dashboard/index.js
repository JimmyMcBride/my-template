import React from "react";

import { Wrapper } from "bushido-strap";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import Header from "./components/Header";
import Overview from "./components/Overview";
import Content from "./components/Content";

export default function Dashboard() {
  return (
    <Wrapper justify="space-between">
      <NavBar />
      <Header />
      <Overview />
      <Content />
      <Footer />
    </Wrapper>
  );
}
