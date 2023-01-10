import React from "react";

export default function Face() {
  const location = 150;
  return (
    <>
      <circle
        cx={location + 190}
        cy={location}
        r={100}
        fill="white"
        stroke="black"
        strokeWidth={10}
      />
      <circle className="blink" cx={location + 160} cy={location - 10} r={15} fill="black" />
      <circle cx={location + 220} cy={location - 10} r={15} fill="black" />
    </>
  );
}
