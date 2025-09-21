import React, { useState } from "react";

export default function NavButton({ icon: Icon, label }) {
  const [active, setActive] = useState(label === "Home");

  return (
    <button
      onClick={() => setActive(true)}
      className={`flex min-w-0 items-center gap-2 px-2 py-1 border-b-4 border-transparent text-gray-700 transition
        hover:text-blue-500 hover:border-blue-500
        ${active ? "text-blue-500 border-blue-500" : ""}`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}
