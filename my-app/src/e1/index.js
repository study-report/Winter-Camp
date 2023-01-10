import React from "react";
import * as d3 from "d3";
import * as S from "./index.style";
import { getArm, getBody, getFace, getHat, getSvg } from "./util";

export default function Index() {
  const canvasRef = React.useRef();

  React.useEffect(() => {
    const svg = getSvg(d3, canvasRef);
    getArm(svg);
    getBody(svg);
    getFace(svg);
    getHat(svg);
  }, []);

  return <S.SnowMan ref={canvasRef} />;
}
