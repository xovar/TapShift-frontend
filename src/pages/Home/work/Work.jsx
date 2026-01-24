import React from "react";
import { workData } from "../../../data/work.data";

function Work() {
  return (
    <section className="mt-25">
      <div className="container mx-auto px-4">
        <div className="text-start mb-12">
          <h2 className="text-3xl text-center font-bold text-black">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {workData.map((work, index) => {
            return (
              <div className="w-[302.5px] bg-white rounded-2xl p-8">
                <div
                  key={index}
                  className="card"
                >
                  <img src={work.icon} width="56px" height="56px" alt="" />
                  <h1 className="text-[#03373D] mt-10.5 mb-4 font-bold text-[20px]">{work.title}</h1>
                  <p className="text-[#606060]">{work.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
