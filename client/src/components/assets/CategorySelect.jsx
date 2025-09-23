import { useState } from "react";

const CategorySelect = ({ options, defaultValue, onChange }) => {
  const [selected, setSelected] = useState(defaultValue || options[0]);

  const handleChange = (e) => {
    setSelected(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <select
      value={selected}
      onChange={handleChange}
      className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-2 outline-blue-600 text-gray-600"
    >
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
