import React, { use, useEffect, useState } from "react";
import { allUsers } from "@/data";
import {
  FaCircleUser,
  FaArrowTrendUp,
  FaArrowTrendDown,
} from "react-icons/fa6";

const RecentUsers: React.FC = () => {
  const [allUsersData, setAllUsersData] = useState<userType>([]);

  useEffect(() => {
    let reversrd = [...allUsers].reverse()
    setAllUsersData(reversrd);
  }, []);

  return (
    <div className="flex flex-col p-3 gap-5">
      {allUsersData?.slice(0, 4)?.map((user) => (
        <div key={user.id} className="p-1 flex items-center justify-between">
          <div className="flex gap-2">
            <FaCircleUser size={35} className="fill-gray-500" />
            <div>
              <p className="text-sm">{user.username}</p>
              <span>
                {user.active ? (
                  <span className="text-green-500 text-sm">Active</span>
                ) : (
                  <span className="text-red-500 text-sm">not Active</span>
                )}
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm font-RobotoMedium">Purchases</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-second">
                {user.purchases > 0 ? user.purchases : "no Purchases"}
              </span>
              {user.icon === "up" ? <FaArrowTrendUp size={20} className="fill-green-500" /> : <FaArrowTrendDown size={20} className="fill-red-500"/>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentUsers;
