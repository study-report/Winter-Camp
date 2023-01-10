import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Index() {
  const graphRef = useRef(null);

  useEffect(() => {
    const value = [100, 10, 20, 50, 120, 60];
    const canvas = d3.select(graphRef.current);
    const config = {
      width: value.length * 40,
      height: Math.max(...value) + 10,
      x: 0,
      y: 0,
      bar: {
        width: 30,
      },
    };

    const svg = canvas
      .append("svg")
      .attr("width", config.width)
      .attr("height", config.height)
      .attr("style", "background: #e9e9e9");

    value.forEach((item, idx) =>
      svg
        .append("rect")
        .attr("x", idx * 40)
        .attr("y", config.height - item)
        .attr("width", config.bar.width)
        .attr("height", item)
    );
  }, []);

  return <div ref={graphRef} />;
}
