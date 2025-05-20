import React from "react";

import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex">
      <div className="relative bg-sky-400 overflow-hidden grow">
        <svg
          className="absolute top-0 w-full h-auto"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0f5c75"
            fill-opacity="1"
            d="M0,160L1440,64L1440,0L0,0Z"
          ></path>
        </svg>
        <div className="relative z-10 p-10 text-white"></div>
      </div>
      <main className="w-full max-w-[500px]">
        <Outlet />
      </main>
    </div>
  );
};
