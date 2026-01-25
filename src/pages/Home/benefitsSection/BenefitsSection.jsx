import React from 'react';
import icon1 from "../../../assets/illu1.png";
import icon2 from "../../../assets/illu2.png";


function BenefitsSection() {
    const benefitData = [
        {
            title: "Live Parcel Tracking",
            desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
            icon: icon2
        },
        {
            title: "100% Safe Delivery",
            desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            icon: icon1
        },
    ];
  return (
    <div className="w-full border-t-2 border-dotted border-[#03373D] border-b-2 mb-25">
  <div className='pt-20 pb-20'>
    {benefitData.map((data, index) => {
      return (
        <div
          key={index}
          className="
            flex flex-col sm:flex-row
            items-center sm:items-center
            mb-6
            p-6 sm:p-8
            bg-white
            rounded-2xl
          "
        >
          {/* Icon */}
          <div
            className="
              flex justify-center items-center
              w-16 h-16 sm:w-auto sm:h-auto
              mb-4 sm:mb-0
              sm:mr-10
            "
          >
            <img
              src={data.icon}
              alt=""
              className="w-20 h-20 md:w-50 md:h-50 object-contain"
            />
          </div>

          {/* Content */}
          <div
            className="
              w-full
              text-center sm:text-left
              border-l-0 sm:border-l-2
              border-dotted border-[#03464D]
              pl-0 sm:pl-10
            "
          >
            <h1 className="font-extrabold text-lg sm:text-[24px] text-black mb-3 sm:mb-4">
              {data.title}
            </h1>
            <p className="font-normal text-sm sm:text-[16px] text-black">
              {data.desc}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>
  );
}

export default BenefitsSection;
