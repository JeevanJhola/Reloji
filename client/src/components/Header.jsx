import ReusableButton from "./ReusableButton";
import SearchBar from "./SearchBar";
import CategorySelect from "./CategorySelect";

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
    </header>
  );
}

export function Main() {
  const categories = [
    "All Categories",
    "Electronics",
    "Furniture",
    "Vehicles",
    "Real Estate",
  ];
  const locations = [
    "All Locations",
    "New York, USA",
    "London, UK",
    "Kochi, India",
    "Sydney, Australia",
  ];

  return (
    <div className="p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl ">
        <div className="space-y-4">
          {/* Category Dropdown */}
          <CategorySelect options={categories} defaultValue="All Categories" />

          {/* Location Dropdown */}
          <CategorySelect options={locations} defaultValue="All Locations" />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex">
          <button className="flex-1 bg-blue-600 text-white font-semibold rounded-l-lg">
            Rent
          </button>
          <button className="flex-1 bg-gray-200 text-gray-700 font-semibold rounded-r-lg hover:bg-gray-300">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
