"use client";

export default function InputControl({ value, setValue }) {
    const handleInputChange = (e) => {
        const input = e.target.value;
        if (/^[0-9\b]+$/.test(input) || input === "") {
            const num = Number(input);
            if (num >= 0 && num <= 100) {
                setValue(num);
            } else if (input === "") {
                setValue(0); // fallback to 0 if user clears
            }
        }
    };

    const increase = () => {
        setValue((prev) => Math.min(prev + 1, 100));
    };

    const decrease = () => {
        setValue((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className="mb-8 flex flex-col items-center gap-4 animate-fade-in-left">
            <label htmlFor="inputValue" className="text-lg font-semibold text-gray-800">
                Enter a value (0-100)
            </label>

            <div className="flex items-center space-x-2">
                <button
                    onClick={decrease}
                    className="px-3 py-1 rounded-md bg-red-100 hover:bg-red-200 text-red-600 text-xl font-bold shadow"
                >
                    −
                </button>

                <input
                    id="inputValue"
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    className="text-center px-4 py-1 border border-gray-300 rounded-lg w-20 shadow-md text-lg"
                />

                <button
                    onClick={increase}
                    className="px-3 py-1 rounded-md bg-green-100 hover:bg-green-200 text-green-600 text-xl font-bold shadow"
                >
                    +
                </button>
            </div>
        </div>
    );
}
