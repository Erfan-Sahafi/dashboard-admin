import React, { FC, useEffect, useState } from "react";
import { productsData } from "@/data";

const productsPage: FC = () => {
  const [allProductsData, setAllProductsData] = useState<productType>([]);

  useEffect(() => {
    setAllProductsData(productsData);
  }, [allProductsData]);


  return (
    <>
      <main>
        <div className="p-2">
          <div className="w-full bg-first rounded-md shadow-md shadow-gray-400">
            <div className="relative overflow-x-auto max-h-screen sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs uppercase">
                  <tr>
                    <th scope="col" className="px-10 py-3">
                      <span className="">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Sales Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allProductsData?.map((product) => (
                    <tr key={product.id} className="bg-white border-b">
                      <td className="p-4">
                        <img
                          src={product.img}
                          className="w-12 md:w-20 max-w-full max-h-full"
                          alt="Apple Watch"
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {product.title}
                      </td>

                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {product.price}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {product.salesNumber}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          className="font-medium text-red-600 mr-4 hover:underline cursor-pointer"
                        >
                          Remove
                        </button>
                        <button
                          className="font-medium text-sky-600 hover:underline cursor-pointer"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default productsPage;
