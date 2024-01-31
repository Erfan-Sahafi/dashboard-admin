import Header from "@/components/Header";
import RecentUsers from "@/components/RecentUsers";
import Revenue from "@/components/Revenue";
import VisitChart from "@/components/VisitChart";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-2 flex gap-2 flex-col md:flex-row">
        <div className="w-full md:w-[70%] bg-first rounded-md shadow-md shadow-gray-400">
          <p className="font-Lilita text-xl text-center p-2">Revenue</p>
          <Revenue />
        </div>
        <div className="w-full md:w-[30%] bg-first rounded-md shadow-md shadow-gray-400">
          <p className="font-Lilita text-xl text-center p-2">Recent Users</p>
          <RecentUsers/>
        </div>
      </div>
      <div className="p-2 flex gap-2 flex-col md:flex-row">
        <div className="w-full md:w-[70%] bg-first rounded-md shadow-md shadow-gray-400">
          <p className="font-Lilita text-xl text-center p-2">Revenue</p>
          <VisitChart />
        </div>
      </div>
    </main>
  );
}
