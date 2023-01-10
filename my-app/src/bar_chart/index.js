import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Index() {
  const graphRef = useRef(null);

  useEffect(() => {
    const value = [100, 10, 20, 50, 10, 60, 100];
    const canvas = d3.select(graphRef.current);
    const config = {
      width: value.length * 40,
      height: Math.max(...value) + 50,
      interval: 40,
      bar: {
        width: 30,
      },
    };

    const svg = canvas
      .append("svg")
      .attr("width", config.width)
      .attr("height", config.height)
      .attr("style", "background: #e9e9e9");

    value.forEach((item, idx) => {
      svg
        .append("rect")
        .attr("x", idx * config.interval)
        .attr("y", config.height)
        .attr("width", config.bar.width)
        .attr("height", item)
        .attr("fill", "#000000")
        .transition()
        .duration(1500)
        .attr("fill", item === Math.max(...value) ? "#00aaff" : "#000000")
        .attr("y", config.height - item);

      svg
        .append("text")
        .attr("x", idx * config.interval + 5)
        .attr("y", config.height - item - 10)
        .text(item)
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px");

    });
  }, []);

  return <div ref={graphRef} />;
}
