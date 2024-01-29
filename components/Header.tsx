import Image from "next/image";
import React from "react";
import { IoIosSearch, IoMdSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";


const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-between py-3 pr-2 items-center bg-white">
      <div>
        <div className="flex search text-black items-center p-1 w-48 sm:w-60 md:w-72 gap-2">
          <input type="text" placeholder="Search..." className="outline-none bg-transparent w-full" />
          <IoIosSearch size={25} className="cursor-pointer fill-sky-700" />
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-5">
        <div className="relative">
          <IoNotifications className="cursor-pointer text-xl sm:text-2xl fill-sky-700" />
          <span className="absolute -top-1 right-0 bg-red-600 rounded-full px-1 text-xs flex items-center justify-center">2</span>
        </div>
        <IoMdSettings className="cursor-pointer text-xl sm:text-2xl fill-sky-700" />
        <div className="flex items-center gap-2 cursor-pointer">
          <p className="hidden text-sm md:block text-sky-700 font-semibold tracking-tighter">Erfan Sahafi</p>
          <Image
            src="/images/prof.jpg"
            width={30}
            height={30}
            className="rounded-full"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
