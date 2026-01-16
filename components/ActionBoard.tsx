"use client";

import { useState } from "react";

export default function ActionBoard() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Click {count}
    </button>
  );
}
