export const getSvg = (d3, canvasRef) => {
  const canvas = d3.select(canvasRef.current);
  const svg = canvas
    .append("svg")
    .attr("width", 800)
    .attr("height", 800)
    .attr("style", "background: #e9e9e9");
  return svg;
};

export const getArm = (svg) => {
  svg
    .append("line")
    .attr("x1", 600)
    .attr("x2", 500)
    .attr("y1", 300)
    .attr("y2", 350)
    .attr("stroke", "black")
    .attr("stroke-width", 10);
  svg
    .append("line")
    .attr("x1", 100)
    .attr("x2", 200)
    .attr("y1", 300)
    .attr("y2", 350)
    .attr("stroke", "black")
    .attr("stroke-width", 10);
  return;
};

export const getBody = (svg) => {
  svg
    .append("circle")
    .attr("cx", 350)
    .attr("cy", 350)
    .attr("stroke", "black")
    .attr("stroke-width", 10)
    .attr("r", 150)
    .attr("fill", "white");
  svg
    .append("circle")
    .attr("cx", 350)
    .attr("cy", 300)
    .attr("r", 10)
    .attr("fill", "black");
  svg
    .append("circle")
    .attr("cx", 350)
    .attr("cy", 350)
    .attr("r", 10)
    .attr("fill", "black");
  svg
    .append("circle")
    .attr("cx", 350)
    .attr("cy", 400)
    .attr("r", 10)
    .attr("fill", "black");
  return;
};

export const getFace = (svg, location = 150) => {
  svg
    .append("circle")
    .attr("cx", location + 190)
    .attr("cy", location)
    .attr("r", 100)
    .attr("fill", "white")
    .attr("stroke", "black")
    .attr("stroke-width", 10);

  svg
    .append("circle")
    .attr("cx", location + 160)
    .attr("cy", location - 10)
    .attr("r", 15)
    .attr("fill", "black")
    .attr("class", "blink");
  svg
    .append("circle")
    .attr("cx", location + 220)
    .attr("cy", location - 10)
    .attr("r", 15)
    .attr("fill", "black");
};

export const getHat = (svg) => {
  svg
    .append("rect")
    .attr("width", 80)
    .attr("height", 50)
    .attr("transform", "translate(410, 15) rotate(45)");
};
