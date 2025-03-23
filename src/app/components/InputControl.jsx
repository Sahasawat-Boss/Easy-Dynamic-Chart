// components/InputControl.jsx
"use client"

import { useState } from "react";

export default function InputControl({ value, setValue }) {
    return (
        <div className="mb-8 flex flex-col items-center gap-4">
            <label htmlFor="inputValue" className="text-lg font-medium text-gray-700">
                Enter a value (0-100)
            </label>
            <input
                id="inputValue"
                type="number"
                value={value}
                min={0}
                max={100}
                onChange={(e) => setValue(Number(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg w-64 shadow-md"
            />
        </div>
    );
}