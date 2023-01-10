import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const getPieColor = (d, data) => {
  switch (d.data) {
    case Math.max(...data):
      return "#aa00ff";
    case Math.min(...data):
      return "#ff00ff";
    default:
      return "#00aaff";
  }
};

export default function Index() {
  const graphRef = useRef(null);

  useEffect(() => {
    const data = [100, 10, 20, 60, 120, 150];
    const canvas = d3.select(graphRef.current);
    const svg = canvas.append("svg").attr("width", 500).attr("height", 500);

    const arcGenerator = d3.arc().innerRadius(50).outerRadius(100);
    const pieGenerator = d3.pie();

    const g = svg.append("g").attr("transform", "translate(150, 150)");

    g.selectAll("path")
      .data(pieGenerator(data))
      .enter()
      .append("path")
      .attr("fill", (d) => getPieColor(d, data))
      .attr("stroke", "black")
      .attr("stroke-width", 4)
      .attr("d", arcGenerator);
  }, []);

  return <div ref={graphRef} />;
}
