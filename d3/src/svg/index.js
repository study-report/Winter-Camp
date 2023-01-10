import React from "react";
import Face from "./face";
import Body from "./body";
import Arm from "./arm";
import Hat from "./hat";
import styled from "@emotion/styled";
import Name from "./name";

const SnowMan = styled.svg`
  @keyframes blink {
    to {
      transform: scaleY(0.1);
    }
  }

  .blink {
    animation-name: blink;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: 0 140px;
  }
`;

export default function SVG() {
  return (
    <SnowMan width={800} height={800}>
      <Body />
      <Face />
      <Arm />
      <Hat />
      <Name />
    </SnowMan>
  );
}
