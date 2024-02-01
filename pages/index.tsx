import DetailseCart from "@/components/DetailseCart";
import Header from "@/components/Header";
import RecentUsers from "@/components/RecentUsers";
import Revenue from "@/components/Revenue";
import TopProducts from "@/components/TopProducts";
import VisitChart from "@/components/VisitChart";
import { FaUsers } from "react-icons/fa6";
import { FcSalesPerformance } from "react-icons/fc";
import { GiCash } from "react-icons/gi";
import { TbBrandCashapp } from "react-icons/tb";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-2 flex gap-2 flex-col md:flex-row h-full">
        <div className="w-full md:w-[40%] grid grid-cols-1 gap-1 sm:grid-cols-2">
          <DetailseCart
            percent="+15%"
            icon={<FaUsers size={30} className="fill-sky-500" />}
            numbers={1589}
            title="Total Customers"
          />
          <DetailseCart
            percent="+27"
            icon={<FcSalesPerformance size={30} />}
            numbers={7529}
            title="Sales Today"
          />
          <DetailseCart
            percent="+5%"
            icon={<TbBrandCashapp size={30} className="text-sky-500"/>}
            numbers={48320}
            title="Monthly Sales"
          />
          <DetailseCart
            percent="+12%"
            icon={<GiCash size={30} className="text-amber-400"/>}
            numbers={95326}
            title="Yearly Sales"
          />
        </div>
        <div className="w-full md:w-[60%] bg-first rounded-md shadow-md shadow-gray-400">
          <p className="font-Lilita text-xl text-center p-2">Revenue</p>
          <Revenue />
        </div>
      </div>
      <div className="p-2 flex gap-2 flex-col md:flex-row">
        <div className="w-full px-4 md:w-[50%] bg-first rounded-md shadow-md shadow-gray-400">
          <p className="font-Lilita text-xl text-center p-2">Visitors</p>
          <VisitChart />
        </div>
        <div className="w-full md:w-[25%] bg-first rounded-md shadow-md shadow-gray-400">
          <p className="font-Lilita text-xl text-center p-2">Top Selling</p>
          <TopProducts />
        </div>
        <div className="w-full md:w-[30%] bg-first rounded-md shadow-md shadow-gray-400">
          <p className="font-Lilita text-xl text-center p-2">Recent Users</p>
          <RecentUsers />
        </div>
      </div>
    </main>
  );
}
