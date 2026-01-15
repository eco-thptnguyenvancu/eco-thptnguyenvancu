"use client";
import ShareAction from "./components/ShareAction";
import ActionBoard from "./components/ActionBoard";
import { useState, useEffect } from "react";

export default function Home() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [actions, setActions] = useState<string[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem("green-actions");
    if (saved) {
      setActions(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("green-actions", JSON.stringify(actions));
  }, [actions]);


  const getSuggestion = async () => {
    setLoading(true);
    const res = await fetch("/api/ai");
    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-green-700">
          🌱 Hành Động Xanh
        </h1>
        <p className="text-gray-600 mt-2 text-sm">
          Mỗi hành động nhỏ hôm nay – Trái Đất xanh hơn ngày mai
        </p>

        <button
          onClick={getSuggestion}
          className="mt-5 w-full bg-green-600 text-white py-2 rounded-lg"
        >
          {loading ? "Đang gợi ý..." : "🤖 Gợi ý việc em có thể làm"}
        </button>

        {result && (
          <div className="mt-4 text-left text-sm">
            <p><b>🌿 Việc làm:</b> {result.title}</p>
            <p><b>📌 Cách làm:</b> {result.guide}</p>
            <p><b>⚠️ An toàn:</b> {result.safety}</p>
            <p className="mt-2 text-green-700">
              💚 {result.encourage}
            </p>
          </div>
        )}
        <ShareAction setActions={setActions} />
        <ActionBoard actions={actions} />
      </div>
    </main>
  );
}
