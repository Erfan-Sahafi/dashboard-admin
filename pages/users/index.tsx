import React, { use, useEffect, useState } from "react";
import { allUsers } from "@/data";
import { FaCircleUser } from "react-icons/fa6";
import { space } from "postcss/lib/list";

const Users = () => {
  const [allUsersData, setAllUsersData] = useState<userType>([]);

  useEffect(() => {
    setAllUsersData(allUsers);
  }, [allUsersData]);

  return (
    <main>
      <div className="p-2">
        <div className="w-full bg-first rounded-md shadow-md shadow-gray-400">
          <div className="relative overflow-x-auto max-h-screen sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right">
              <thead className="text-xs uppercase">
                <tr>
                  <th scope="col" className="px-10 py-3"></th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>

                  <th scope="col" className="px-6 py-3">
                    User Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Purchases
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Activity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allUsersData?.map((user) => (
                  <tr key={user.id} className="bg-white border-b">
                    <td className="px-6">
                      <FaCircleUser size={25} className="fill-gray-500" />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {user.name}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {user.username}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {user.purchases}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {
                        user.active ? (
                            <span className="text-green-500">Active</span>
                        ):(
                            <span className="text-red-500">Not-Active</span>
                        )
                      }
                    </td>
                    <td className="px-6 py-4">
                      <button className="font-medium text-red-600 mr-4 hover:underline cursor-pointer">
                        Remove
                      </button>
                      <button className="font-medium text-sky-600 hover:underline cursor-pointer">
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
  );
};

export default Users;
