import React from "react";
import box from "@/components/box";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="py-6">
        <div className="flex items-center w-full justify-between">
          <div>
            <h1 className="text-xl font-medium text-gray-800">Tasks</h1>
            <p className="font-light text-gray-400 text-md">
              See all Task Listed Below
            </p>
          </div>
          <Link href={"/new"}>New Task</Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
