export default function TextInput({
  label,
  name,
  type = "text",
  ...inputProps
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>

      <input
        type={type}
        name={name}
        required
        className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        {...inputProps}
      />
    </div>
  );
}

