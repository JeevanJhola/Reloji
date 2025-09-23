import CategorySelect from "./CategorySelect";

export default function Home() {
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
          <button className="flex-1 pt-1 pb-1 bg-blue-600 text-white font-semibold rounded-l-lg">
            Rent
          </button>
          <button className="flex-1 pt-1 pb-1 bg-gray-200 text-gray-700 font-semibold rounded-r-lg hover:bg-gray-300">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
