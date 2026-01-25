import React from 'react';
import logo from "../../assets/be-a-merchant-bg.png";
import logo2 from "../../assets/location-merchant.png"

function Merchant() {
  return (
    <div
      style={{ backgroundImage: `url(${logo})` }}
      className="
        mb-25
        bg-[#03373d]
        p-6 sm:p-10 md:p-20
        rounded-2xl
        bg-no-repeat
        flex
        md:flex-row
        flex-col-reverse
        items-center
        gap-8
      "
    >
      {/* TEXT */}
      <div className="w-full md:w-168.5 text-center md:text-left">
        <h1 className="font-extrabold text-[28px] sm:text-[32px] md:text-[40px] mb-4">
          Merchant and Customer Satisfaction is Our First Priority
        </h1>

        <p className="font-normal text-[14px] sm:text-[16px]">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <button className="px-8 py-4 border bg-[#CAEB66] rounded-4xl text-black font-bold text-[16px] sm:text-[20px] hover:bg-transparent hover:text-[#CAEB66] cursor-pointer">
            Become a Merchant
          </button>

          <button className="px-8 py-4 border rounded-4xl text-[#CAEB66] font-bold text-[16px] sm:text-[20px] hover:bg-[#CAEB66] hover:text-black cursor-pointer">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <div className="w-full md:w-auto flex justify-center">
        <img
          src={logo2}
          alt=""
          className="w-48 sm:w-64 md:w-auto"
        />
      </div>
    </div>
  );
}

export default Merchant;