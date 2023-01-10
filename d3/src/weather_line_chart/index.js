import React from "react";
import Line from "../components/LineChart";

export default function Index() {
  const props = {
    0: { color: "red", name: "평균최고기온(°C)" },
    1: { color: "black", name: "평균기온(°C)" },
    2: { color: "blue", name: "평균최저기온(°C)" },
    length: 3,
  };

  return <Line {...props} />;
}
