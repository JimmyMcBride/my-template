import React from "react";

import { FlexBox } from "bushido-strap";

import ContentCard from "./sub_components/ContentCard";

import { useSelector } from "react-redux";

export default function Content() {
  const content = useSelector(state => state.info.content);

  return (
    <FlexBox width="100%" height="30vh" wrap="wrap" justify="space-around">
      {content.map(info => {
        return <ContentCard title={`${info.title}`} />;
      })}
    </FlexBox>
  );
}
