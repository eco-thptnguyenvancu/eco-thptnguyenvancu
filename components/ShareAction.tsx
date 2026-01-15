"use client";
import { useState } from "react";

export default function ShareAction({ setActions }: any) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    setActions((prev: string[]) => [...prev, text]);
    setText("");
  };

  return (
    <div className="mt-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập hành động xanh của em..."
        className="w-full border rounded p-2 text-sm"
      />

      <button
        onClick={handleAdd}
        className="mt-2 w-full bg-green-500 text-white py-2 rounded"
      >
        📸 Chia sẻ hành động của em
      </button>
    </div>
  );
}
