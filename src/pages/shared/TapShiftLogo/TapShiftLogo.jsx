import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router";

function TapShiftLogo({ color }) {
  let textColor = "text-[black]";

  if (color == "white") {
    textColor = "text-[white]";
  }
  return (
    <Link to="/">
      <div className="flex items-end">
        <img className="" src={logo} alt="" />
        <p className={`font-extrabold text-[20px] ${textColor} -ml-4`}>
          TapShift
        </p>
      </div>
    </Link>
  );
}

export default TapShiftLogo;
