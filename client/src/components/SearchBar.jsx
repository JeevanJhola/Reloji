const SearchBar = ({ id, placeholder = "Search...", width = "w-64" }) => {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`${width} px-4 py-2 border border-gray-300 rounded-full 
                  focus:outline-none focus:ring-2 focus:ring-blue-500`}
    />
  );
};

export default SearchBar;

