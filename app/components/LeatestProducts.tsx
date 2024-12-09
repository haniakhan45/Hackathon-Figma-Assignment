"use client";

import Image from "next/image";
import {
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const LeatestProducts: React.FC = () => {
  const categories = [
    "New Arrival",
    "Best Seller",
    "Featured",
    "Special Offer",
  ];

  const products = [
    {
      id: 1,
      img: "/image/Picture1.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      code: "Y523201",
      sale: true,
    },
    {
      id: 2,
      img: "/image/Picture2.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      code: "Y523201",
      sale: true,
    },
    {
      id: 3,
      img: "/image/Picture3.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      code: "Y523201",
      sale: true,
    },
    {
      id: 4,
      img: "/image/Picture4.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      code: "Y523201",
      sale: true,
    },
    {
      id: 5,
      img: "/image/Picture5.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      code: "Y523201",
      sale: true,
    },
    {
      id: 6,
      img: "/image/chair1.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      code: "Y523201",
      sale: true,
    },
    {
      id: 7,
      img: "/image/chair2.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      code: "Y523201",
      sale: true,
    },
    {
      id: 8,
      img: "/image/chair3.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      code: "Y523201",
      sale: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-10">
          Latest Products
        </h2>

        <div className="flex justify-center space-x-6 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-sm font-medium ${
                index === 0
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : "text-gray-500"
              } hover:text-pink-500`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg p-4 text-center group border border-gray-200 hover:shadow-2xl transition-shadow"
            >
              <div className="w-full h-60 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex justify-center items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <HeartIcon className="w-6 h-6 text-gray-700" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">Code: {product.code}</p>
              <div className="flex justify-center items-center mt-2">
                <span className="text-red-500 line-through text-sm mr-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-gray-800 font-semibold">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <button className="w-full mt-4 py-2 text-sm bg-pink-500 text-white rounded hover:bg-pink-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeatestProducts;
