import React from "react";
import { faqData } from "../../../data/faq.data";

function FaqSection() {
  return (
    <div className="mb-25">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-black font-extrabold text-[40px]">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="text-[16px] text-black w-208 text-center">
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
    </div>
  );
}

export default FaqSection;
