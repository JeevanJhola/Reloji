// src/components/ProductCard.jsx

import React from 'react';

const ProductCard = ({ 
    id, 
    name, 
    category, 
    imageUrl, 
    buyPrice, 
    rentPrice, 
    rentTerm, 
    isDimmed,
    onHover,
    onLeave
}) => {

    const dimClasses = isDimmed
        ? 'opacity-30 blur-sm pointer-events-none'
        : 'opacity-100';

    return (
        <div
            id={`product-${id}`}
            onMouseEnter={() => onHover(id)}
            onMouseLeave={onLeave}
            className={`
                w-full max-w-sm
                overflow-hidden rounded-xl
                border border-gray-200
                bg-white
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                ${dimClasses}
            `}
        >
            {/* Product Image */}
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Product Details */}
            <div className="p-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {name}
                </h3>
                <p className="text-sm text-gray-500">{category}</p>
            </div>

            {/* Price Options */}
            <div className="grid grid-cols-2 gap-3 p-4">
                
                {/* BUY */}
                <div className="text-center">
                    <span className="block text-xs font-bold text-gray-600 uppercase mb-1">
                        Buy
                    </span>
                    <button
                        className="
                            w-full py-2
                            border border-gray-300
                            rounded-lg
                            text-lg font-bold text-gray-800
                            hover:bg-gray-50
                            transition
                        "
                        onClick={() => alert(`Adding ${name} to Buy Cart`)}
                    >
                        {buyPrice}
                    </button>
                </div>

                {/* RENT */}
                <div className="text-center">
                    <span className="block text-xs font-bold text-gray-600 uppercase mb-1">
                        Rent
                    </span>
                    <button
                        className="
                            w-full py-2
                            bg-blue-600 text-white
                            rounded-lg
                            text-lg font-bold
                            border border-blue-600
                            hover:bg-blue-700
                            transition shadow-md
                        "
                        onClick={() => alert(`Adding ${name} to Rent Cart`)}
                    >
                        {rentPrice}
                    </button>
                    <p className="text-[0.65rem] text-gray-400 mt-1 leading-tight">
                        {rentTerm}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;

