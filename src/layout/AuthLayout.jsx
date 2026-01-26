import React from "react";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png"

export default function AuthLayout() {
  return (
    <div className="">
      <div className=" h-screen w-full flex  flex-row">
        <div className="w-full  md:w-[50%] bg-white flex justify-center items-center">
          <Outlet/>
        </div>
        <div className="bg-[#fbfdf0] hidden w-0 md:w-[50%] md:flex justify-center items-center">
            <img src={authImg} style={{objectFit: "cover"}} alt="" />
        </div>
      </div>
    </div>
  );
}
