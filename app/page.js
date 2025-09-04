"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Home = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getData = async (latestCurrentPage) => {
    setLoading(true);
    const request = await fetch(
      `https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=281407&page=${latestCurrentPage}&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9c3a7a1828msh64e0c3c715061ffp1ae97ajsnb2912fcb2d44",
          "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
        },
      }
    );
    const response = await request.json();
    setData(response?.data?.products);
    setLoading(false);
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  if (loading || !data) {
    return (
      <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 flex items-center justify-center min-h-screen">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-500"></div>
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white font-medium">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800 py-3">
      <div className="grid grid-cols-1 gap-4 m-4 md:grid-cols-3 lg:grid-cols-4  lg:px-24 my-5">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-zinc-800 p-4 text-white"
              title={item.product_title}
            >
              <div className="h-[300px] overflow-hidden">
                <img
                  src={item.product_photo}
                  alt=""
                  className="w-full h-[300px] object-contain bg-white p-5 rounded hover:scale-110 hover:rotate-[5deg] transition-all duration-300"
                />
              </div>
              <h1 className="font-bold mt-3 line-clamp-2">
                {item.product_title}
              </h1>
              <p className="text-sm opacity-50 mt-2 line-clamp-1">
                {item.delivery}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <h2 className="line-through text-lg text-red-400">
                  {item.product_original_price}
                </h2>
                <h2 className="text-2xl font-bold text-green-400">
                  {item.product_price}
                </h2>
              </div>
              <Link
                href={item?.product_url}
                target="_blank"
                className="w-full block py-3 text-center bg-blue-500 rounded mt-3"
              >
                Buy Now
              </Link>
            </div>
          );
        })}
      </div>

      <div className="m-auto w-full mb-4">
        <div className="flex items-center justify-center gap-4">
          <button
            className="bg-blue-500 h-12 px-4 rounded"
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <p className="text-lg font-bold">{currentPage}</p>
          <button
            className="bg-blue-500 h-12 px-4 rounded"
            onClick={() => currentPage < 20 && setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
