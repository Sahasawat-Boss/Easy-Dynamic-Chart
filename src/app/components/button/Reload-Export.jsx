// components/ExportButtons.jsx
"use client";

export default function ReloadExport() {
    const handleReload = () => {
        window.location.reload();
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex justify-center gap-4 mb-8">
            <button
                onClick={handleReload}
                className=" rounded bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium shadow text-2xl hover:cursor-pointer"
            >
                🔄
            </button>
            <button
                onClick={handlePrint}
                className="px-2 py-1 rounded bg-green-400 hover:bg-green-200 text-white font-medium shadow hover:cursor-pointer"
            >
                🖨️ Print / Export PDF
            </button>
        </div>
    );
}