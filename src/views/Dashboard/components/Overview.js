import React from "react";

import { FlexBox } from "bushido-strap";

import OverviewCard from "./sub_components/OverviewCard";

import { useSelector } from "react-redux";

export default function Overview() {
  const overview = useSelector(state => state.info.overview);

  return (
    <FlexBox width="100%" height="20vh" justify="space-around" align="center">
      {overview.map(info => {
        return <OverviewCard title={`${info.title}`} />;
      })}
    </FlexBox>
  );
}
