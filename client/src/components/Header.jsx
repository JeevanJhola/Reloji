import ReusableButton from "./assets/ReusableButton";
import SearchBar from "./assets/SearchBar";
import { Plus, Home, Compass, Users, User } from "lucide-react";
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
              <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
            </ReusableButton>

            {/* User button */}
            <ReusableButton color="gray">
              <User className="w-5 h-5 text-gray-600" />
            </ReusableButton>
          </div>
        </div>
        {/* Search Bar (mobile) */}
        <div className="md:hidden w-full mt-3">
          <SearchBar id="search-mobile" width="w-full" />
        </div>
      </div>
      <nav className="flex w-full pt-1.5 pb-1.5 border-t-4 border-gray-50">
        <NavButton icon={Home} label="Home" />
        <NavButton icon={Compass} label="Discover" />
        <NavButton icon={Users} label="Circle" />
      </nav>
    </header>
  );
}
