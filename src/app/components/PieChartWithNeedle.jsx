"use client";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d"];

const renderNeedle = (value, viewBox) => {
    const { cx, cy, outerRadius } = viewBox;
    const angle = 180 * (1 - value / 100);
    const rad = (Math.PI * angle) / 180;
    const x = cx + outerRadius * Math.cos(rad);
    const y = cy - outerRadius * Math.sin(rad);

    return (
        <>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="#8884d8" strokeWidth={3} />
            <circle cx={cx} cy={cy} r={5} fill="#8884d8" stroke="white" strokeWidth={2} />
        </>
    );
};

export default function PieChartWithNeedle({ value }) {
    const data = [
        { name: "Used", value },
        { name: "Remaining", value: 100 - value },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Gauge-Style Pie with Needle
            </h2>
            <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="100%" // Push down to bottom
                        startAngle={180}
                        endAngle={0}
                        innerRadius="70%"
                        outerRadius="100%"
                        dataKey="value"
                        stroke="none"
                        isAnimationActive={false}
                        label={false}
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Pie
                        data={[{ value: 100 }]}
                        cx="50%"
                        cy="100%"
                        outerRadius="100%"
                        fill="transparent"
                        activeIndex={0}
                        activeShape={(props) => renderNeedle(value, props)}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
