import React from "react";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png"

export default function AuthLayout() {
  return (
    <div className="">
      <div className=" h-screen w-full flex flex-col lg:flex-row">
        <div className="w-[50%] bg-white flex justify-center items-center">
          <Outlet/>
        </div>
        <div className="bg-[#fbfdf0] w-[50%] flex justify-center items-center">
            <img src={authImg} style={{objectFit: "cover"}} alt="" />
        </div>
      </div>
    </div>
  );
}
