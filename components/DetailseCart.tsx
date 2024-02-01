import React from "react";
import { FaUsers } from "react-icons/fa";

const DetailseCart: React.FC<detailsType> = (props) => {
  return (
    <div className="w-full py-2 px-3 bg-first rounded-md shadow-md shadow-gray-400">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between text-[14px]">
          <span>{props.title}</span>
          {props.icon}
        </div>
        <div>
          <span className="font-RobotoBold text-2xl">{props.numbers}</span>
        </div>
        <div className="flex justify-between text-[13px]">
          <i className="font-RobotoBold text-green-500">{props.percent}</i>
          <span className="text-gray-500">Since last month</span>
        </div>
      </div>
    </div>
  );
};

export default DetailseCart;
