export default function ReusableButton({ color = "blue", children }) {
  const baseClasses =
    "flex items-center justify-center w-10 h-10 rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none"

  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-800 text-white",
    gray: "bg-gray-200 hover:bg-gray-400 text-gray-600",
  }

  return (
    <button className={`${baseClasses} ${colorClasses[color] || colorClasses.blue}`}>
      {children}
    </button>
  )
}
``
