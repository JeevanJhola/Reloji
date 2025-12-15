import CategorySelect from "./assets/CategorySelect";
import React, { useState } from "react";
import ProductCard from "./assets/ProductCard";
import { useProducts } from "../hooks/useProducts";

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

  const { products, isLoading, error } = useProducts();
  const [activeId, setActiveId] = useState(null);

  const formatBuyPrice = price => `$${price.toFixed(2)}`;
  const formatRentPrice = price => `$${price}/mo`;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-4 space-y-10">
      {/* Filters */}
      <div className="bg-white p-8 rounded-xl shadow-2xl">
        <div className="space-y-4">
          <CategorySelect options={categories} defaultValue="All Categories" />
          <CategorySelect options={locations} defaultValue="All Locations" />
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            category={product.category}
            imageUrl={`http://localhost:5000${product.image}`}
            buyPrice={formatBuyPrice(product.buyPrice)}
            rentPrice={formatRentPrice(product.rentPrice)}
            rentTerm={product.rentTerm}
            isDimmed={activeId !== null && activeId !== product._id}
            onHover={setActiveId}
            onLeave={() => setActiveId(null)}
          />
        ))}
      </div>
    </div>
  );
}
