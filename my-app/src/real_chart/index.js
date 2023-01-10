import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const generateGraph = (d3, svg, xFunc, yFunc, color) => {
  const lineGenerator = d3.line().x(xFunc).y(yFunc);
  d3.csv("/data/weather.csv").then((response) => {
    console.log(response);
    svg
      .append("path")
      .attr("stroke", color)
      .attr("stroke-width", 4)
      .attr("fill", "none")
      .attr("d", lineGenerator(response));
  });
  return;
};

export default function Index() {
  const graphRef = useRef(null);

  useEffect(() => {
    const canvas = d3.select(graphRef.current);
    const svg = canvas.append("svg").attr("width", 500).attr("height", 500);
    const scaleFunc = d3.scaleLinear().domain([5, 40]).range([0, 100]);

    generateGraph(
      d3,
      svg,
      (_, idx) => idx * 50,
      (yData) => scaleFunc(40 - yData["평균최고기온(°C)"]),
      "red"
    );

    generateGraph(
      d3,
      svg,
      (_, idx) => idx * 50,
      (yData) => scaleFunc(40 - yData["평균기온(°C)"]),
      "black"
    );

    generateGraph(
      d3,
      svg,
      (_, idx) => idx * 50,
      (yData) => 40 - scaleFunc(yData["평균최저기온(°C)"]),
      "blue"
    );
  }, []);

  return <div ref={graphRef} />;
}
