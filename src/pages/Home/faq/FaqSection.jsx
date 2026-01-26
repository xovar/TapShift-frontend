import React from "react";
import { faqData } from "../../../data/faq.data";

function FaqSection() {
  return (
    <div className="mb-25">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-black font-extrabold text-[40px] text-center">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="text-[16px] text-black m-w-208 text-center">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="mt-10">
        {faqData.map((item, index) => {
          return (
            <div key={index} className="collapse collapse-arrow bg-white mb-4">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-black font-semibold">
                {item.title}
              </div>
              <div className="collapse-content text-black text-sm">
                {item.desc}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
      <button className="px-8 py-4 border border-[#CAEB66] bg-[#CAEB66] rounded-4xl text-black font-bold text-[16px] sm:text-[20px] hover:bg-white hover:text-[black] cursor-pointer">
            See More FAQ's
          </button>
      </div>
    </div>
  );
}

export default FaqSection;
