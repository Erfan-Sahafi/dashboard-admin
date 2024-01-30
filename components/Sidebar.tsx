import React, { PropsWithChildren } from "react";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import SidebarCart from "./SidebarCart";


const Sidebar = ({ children }: PropsWithChildren): React.ReactNode => {
  return (
    <div className="flex h-[100vh]">
      <div className="w-[15%] p-1 h-full bg-white">
        <div className="p-2 flex items-center gap-1 mb-12">
          <PiShoppingBagOpenFill size={28} className="fill-second" />
          <span className="font-Lilita text-black tracking-tight">DASHBOARD ADMIN</span>
        </div>
        <SidebarCart/>
      </div>
      <main className="w-[85%]">{children}</main>
    </div>
  );
};

export default Sidebar;
