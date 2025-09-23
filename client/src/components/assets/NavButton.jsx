import { NavLink } from "react-router-dom";

/* eslint-disable-next-line no-unused-vars */
export default function NavButton({ icon: Icon, label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-1 items-center justify-center gap-1 px-2 py-1
         border-b-4 hover:text-blue-500 hover:border-blue-500
         ${
           isActive
             ? "text-blue-500 border-blue-500"
             : "text-gray-700 border-transparent"
         }`
      }
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="sm:text-sm">{label}</span>
    </NavLink>
  );
}
