"use client";

import { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 border-b text-sm sm:text-base">
        <Link href="/" className="text-2xl font-bold text-black mb-4 sm:mb-0">
          Hekto
        </Link>
        <ul className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4">
          <li>
            <Link href="/" className="hover:text-pink-600">
              Home
            </Link>
            <span className="text-xs gap-1"> ▼</span>
          </li>

          <li>
            <Link href="/products" className="hover:text-pink-600">
              Products
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-pink-600">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-pink-600">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-pink-600">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border rounded px-2 py-1 w-full sm:w-auto"
          />
          <button className="text-white bg-pink-500 px-4 py-1 rounded hover:bg-pink-600">
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center text-center bg-white py-16 relative px-4">
        <div className="absolute top-10 left-4 sm:top-16 sm:left-16">
          <div className="rounded-full h-64 w-64 sm:h-80 sm:w-80 flex items-center justify-center">
            <img
              src="/image/lamp.png"
              alt="Lamp"
              className="h-40 w-40 sm:h-64 sm:w-64"
            />
          </div>
        </div>

        <div className="absolute top-10 right-4 sm:top-16 sm:right-16">
          <div className="rounded-full h-64 w-64 sm:h-96 sm:w-96 flex items-center justify-center">
            <img
              src="/image/chair.png"
              alt="Chair"
              className="h-48 w-48 sm:h-72 sm:w-72 object-contain"
            />
          </div>
        </div>

        <h3 className=" text-pink-500 text-left">
          Best Furniture For Your Castle....
        </h3>
        <h2 className="text-2xl sm:text-4xl font-bold mt-4 text-left">
          New Furniture Collection <br /> Trends in 2020
        </h2>

        <p className="text-gray-500 mt-2 text-sm sm:text-base text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>

        <Link
          href="/shop"
          className="mt-4 bg-pink-500 text-white px-4 sm:px-6 py-2 rounded hover:bg-pink-600"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
