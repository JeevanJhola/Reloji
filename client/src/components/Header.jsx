import ReusableButton from "./assets/ReusableButton";
import SearchBar from "./assets/SearchBar";
import { Home, Compass, Users, User } from "lucide-react";
import NavButton from "./assets/NavButton";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-3 px-3">
        <div className="flex items-center justify-between ">
          <h1 className="text-3xl font-bold text-blue-600">Reloji</h1>

          {/* Search Bar */}
          <div className="hidden md:flex">
            <SearchBar id="search-desktop" />
          </div>

          <div className="flex items-center space-x-3">
            {/* Plus button */}
            <ReusableButton color="blue">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="white"
              >
                <path strokeLinecap="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </ReusableButton>

            {/* User button */}
            <ReusableButton color="gray">
              <span className="text-lg font-semibold text-gray-600">U</span>
            </ReusableButton>
          </div>
        </div>
        {/* Search Bar (mobile) */}
        <div className="md:hidden w-full mt-3">
          <SearchBar id="search-mobile" width="w-full" />
        </div>
      </div>
      <nav className="flex flex-nowrap space-x-4 justify-evenly p-4 border-2">
      <NavButton icon={Home} label="Home" />
      <NavButton icon={Compass} label="Discover" />
      <NavButton icon={Users} label="Circle" />
      <NavButton icon={User} label="Profile" />
    </nav>
  
    </header>
  );
}


