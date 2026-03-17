import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router";

function UserLayout() {
  return (
    <div>
      <div className="min-h-screen">
        <Header />
        <div className="relative pt-14  flex gap-2 bg-gray-100 border ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserLayout;
