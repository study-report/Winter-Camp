import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Line(props) {
  const chartRef = useRef();

  useEffect(() => {
    const canvas = d3.select(chartRef.current);
    const svg = canvas.append("svg").attr("width", 500).attr("height", 500);
    d3.csv("/data/weather.csv").then((response) => {
      Array.from(props).forEach(({ color, name }) => {
        const xFunc = (_, idx) => idx * 50;
        const yFunc = (yData) => scaleFunc(40 - yData[name]);
        const lineGenerator = d3.line().x(xFunc).y(yFunc);
        const scaleFunc = d3.scaleLinear().domain([5, 40]).range([0, 100]);

        svg
          .append("path")
          .attr("stroke", color)
          .attr("stroke-width", 4)
          .attr("fill", "none")
          .attr("d", lineGenerator(response));
      });
    });
  }, [props]);

  return <div ref={chartRef} />;
}
