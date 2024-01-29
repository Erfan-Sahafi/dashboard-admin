import React, { PropsWithChildren } from "react";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";

const Sidebar = ({ children }: PropsWithChildren): React.ReactNode => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-[15%] p-1 bg-white">
        <div className="p-2 flex items-center gap-1 mb-12">
          <PiShoppingBagOpenFill size={28} className="fill-sky-700" />
          <span className="font-bold text-sky-700">DASBOARD ADMIN</span>
        </div>
        <div className="px-2 flex items-center justify-start text-sm gap-2 p-2 rounded-md bg-sky-700">
          <GoHomeFill size={20} className="fill-white"/>
          <span className="text-white">Dashboard</span>
        </div>
      </aside>
      <main className="w-[85%]">{children}</main>
    </div>
  );
};

export default Sidebar;
