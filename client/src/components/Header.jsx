import ReusableButton from "./ReusableButton"
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-3">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-3xl font-bold text-blue-600">Reloji</h1>

          {/* Search Bar */}
          <div className="hidden md:flex">
          <SearchBar id="search-desktop"/>
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
            
            {/* Search Bar */}
            <div className="md:hidden w-full mt-3">
            <SearchBar id="search-mobile" width="w-full"/>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  )
}

