import React from "react";
import { GoHome } from "react-icons/go";
import { CiSettings, CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiTodoLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const SidebarCart: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-[80%] justify-between">
        <div>
          <div className="px-2 flex items-center justify-start text-sm gap-2 p-2 rounded-md bg-second mb-3 cursor-pointer">
            <GoHome size={20} className="fill-first" />
            <span className="text-first font-RobotoMedium">Dashboard</span>
          </div>
          <div className="px-2 flex items-center justify-start text-sm gap-2 p-2 rounded-md mb-3 cursor-pointer">
            <AiOutlineShoppingCart size={20} className="fill-gray-500" />
            <span className="text-gray-500 font-RobotoMedium">Products</span>
          </div>
          <div className="px-2 flex items-center justify-start text-sm gap-2 p-2 rounded-md mb-3 cursor-pointer">
            <CiUser size={20} className="fill-gray-500" />
            <span className="text-gray-500 font-RobotoMedium">Users</span>
          </div>
          <div className="px-2 flex items-center justify-start text-sm gap-2 p-2 rounded-md mb-3 cursor-pointer">
            <RiTodoLine size={20} className="fill-gray-500" />
            <span className="text-gray-500 font-RobotoMedium">Todos</span>
          </div>
        </div>
        <div>
          <div className="px-2 flex items-center justify-start text-sm gap-2 p-2 rounded-md mb-3 cursor-pointer">
            <CiSettings size={20} className="fill-gray-500" />
            <span className="text-gray-500 font-RobotoMedium">Setting</span>
          </div>
          <div className="px-2 flex items-center justify-start text-sm gap-2 p-2 rounded-md mb-3 cursor-pointer">
            <IoMdNotificationsOutline size={20} className="fill-gray-500" />
            <div className="flex gap-5 text-gray-500 font-RobotoMedium">
              Notification
              <span className="text-red-500 font-bold">2</span>
            </div>
          </div>
          <div className="px-2 flex items-center justify-start text-sm gap-2 p-2 rounded-md mb-3 cursor-pointer">
            <CiLogout size={20} className="fill-gray-500" />
            <span className="text-gray-500 font-RobotoMedium">Log Out</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarCart;
