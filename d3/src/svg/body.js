import React from "react";

export default function Body() {
  return (
    <>
      <circle
        cx={350}
        cy={350}
        stroke="black"
        strokeWidth={10}
        r={150}
        fill="white"
      />
      <circle cx={345} cy={300} r={10} fill="black" />
      <circle cx={345} cy={350} r={10} fill="black" />
      <circle cx={345} cy={400} r={10} fill="black" />
    </>
  );
}
