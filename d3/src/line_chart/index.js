import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Index() {
  const graphRef = useRef(null);

  useEffect(() => {
    const data = [100, 10, 20, 50, 10, 60, 120];
    const canvas = d3.select(graphRef.current);

    const svg = canvas.append("svg").attr("width", 500).attr("height", 500);

    const xFunc = (_, idx) => idx * 45 + 10;
    const yFunc = (data) => (150 - data) * 2;
    const drawLineChartGenerator = d3
      .line()
      .x(xFunc)
      .y(yFunc)
      .curve(d3.curveBasis);

    const path = svg
      .append("path")
      .attr("d", drawLineChartGenerator(data))
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 8);

    const length = path.node().getTotalLength();

    path
      .attr("stroke-dashoffset", length)
      .attr("stroke-dasharray", length)
      .transition()
      .duration(1000)
      .attr("stroke-dashoffset", 2);
  }, []);

  return <div ref={graphRef} />;
}
