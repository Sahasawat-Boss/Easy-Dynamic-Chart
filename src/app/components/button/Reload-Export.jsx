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
                className="px-1 py-1 rounded bg-blue-500 hover:bg-blue-200 text-blue-700 font-medium shadow text-2xl hover"
            >
                🔄
            </button>
            <button
                onClick={handlePrint}
                className="px-4 py-1 rounded bg-green-500 hover:bg-green-200 text-white font-medium shadow hover"
            >
                🖨️ Print
            </button>
        </div>
    );
}