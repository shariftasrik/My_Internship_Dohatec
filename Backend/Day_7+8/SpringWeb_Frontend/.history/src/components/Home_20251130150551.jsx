import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/products");
        setProducts(res.data);
      } catch (e) {
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  if (isError) {
    return (
      <h2 className="text-center text-red-600 font-semibold py-40">
        Something went wrong...
      </h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 flex flex-col justify-between hover:shadow-xl transition"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {product.name.toUpperCase()}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm italic">
              by {product.brand}
            </p>
          </div>

          <hr className="my-3 border-gray-300" />

          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
              ₹ {product.price}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
