import React, { useState } from "react";

export default function NavButton({ icon: Icon, label }) {
  const [active, setActive] = useState(label === "Home");

  return (
    <button
      onClick={() => setActive(true)}
      className={`flex flex-1 items-center justify-center gap-1 px-2 py-1 
        border-b-4 border-transparent text-gray-700 hover:text-blue-500 hover:border-blue-500
        ${active ? "text-blue-500 border-blue-500" : ""}`}
          >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="sm:text-sm">{label}</span>
    </button>
  );
}
