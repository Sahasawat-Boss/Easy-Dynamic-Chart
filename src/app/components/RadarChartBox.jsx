"use client";

import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

export default function RadarChartBox({ data }) {
    return (
        <div className="bg-white p-6 rounded shadow-lg hover">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Radar Chart</h2>
            <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis />
                    <Radar name="Value" dataKey="value" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
