// app/page.jsx or app/page.tsx
"use client";

import { useState } from "react";
import InputControl from "./components/InputControl";
import LineChartBox from "./components/LineChartBox";
import PieChartBox from "./components/PieChartBox";
import BarChartBox from "./components/BarChartBox";
import AreaChartBox from "./components/AreaChartBox";

export default function Home() {
  const [value, setValue] = useState(10);

  const lineData = Array.from({ length: 10 }, (_, i) => ({
    name: `Point ${i + 1}`,
    value: value * (i + 1),
  }));

  const pieData = [
    { name: "Used", value },
    { name: "Remaining", value: 100 - value },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-100 to-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
          Real-time Dynamic Chart
        </h1>

        <InputControl value={value} setValue={setValue} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <PieChartBox data={pieData} />
          <AreaChartBox data={lineData} />
          <BarChartBox data={lineData} />
          <LineChartBox data={lineData} />
        </div>
      </div>
    </main>
  );
}
