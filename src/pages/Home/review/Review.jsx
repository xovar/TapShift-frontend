import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { reviewData } from "../../../data/review.data";

export default function TestimonialCarousel() {
  return (
    <section className="bg-[#f5f6f6] py-20">
  {/* ... existing Header ... */}

  <Swiper
    modules={[Navigation, Pagination]}
    slidesPerView={1}
    centeredSlides
    loop
    spaceBetween={30}
    pagination={{ 
      el: ".custom-pagination", // Target custom class
      clickable: true 
    }}
    navigation={{
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
    }}
    style={{
        "--swiper-pagination-color": "#03373d",
        "--swiper-pagination-bullet-inactive-color": "#94a3b8",
        "--swiper-pagination-bullet-inactive-opacity": "0.5",
        "--swiper-pagination-bullet-size": "8px",
        "--swiper-pagination-bullet-horizontal-gap": "4px"
    }}
    breakpoints={{ 768: { slidesPerView: 3 } }}
    className="max-w-6xl mx-auto !pb-12" // Add padding to bottom for controls
  >
    {reviewData.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="testimonial-card">
              <span className="text-6xl text-teal-200 font-bold">“</span>

              <p className="text-black mb-6 font-medium text-[16px]">{item.review}</p>

              <div className="border-t border-dashed pt-4 flex items-center gap-4">
                <img src={item.user_photoURL} alt="" className="w-10 h-10 rounded-full " />
                <div>
                  <h4 className="font-extrabold text-black text-[20px] ">{item.userName}</h4>
                  <p className="text-sm text-gray-500"> <span className="text-black font-extrabold">Parcel Id : </span> {item.parcel_id}</p>
                </div>
              </div>
            </div>
      </SwiperSlide>
    ))}

    {/* CUSTOM CONTROLS CONTAINER */}
    <div className="flex items-center justify-center gap-6 mt-10">
      <button className="custom-prev w-10 h-10 font-extrabold rounded-full bg-white cursor-pointer hover:bg-[#d9f99d] flex items-center justify-center text-[#03373d] hover:bg-opacity-80 transition-all">
        ←
      </button>
      
      {/* Pagination bullets will be injected here */}
      <div className="custom-pagination static! w-auto! flex gap-1"></div>

      <button className="custom-next w-10 h-10 font-extrabold rounded-full cursor-pointer bg-white hover:bg-[#d9f99d] flex items-center justify-center text-[#03373d] hover:bg-opacity-80 transition-all">
        →
      </button>
    </div>
  </Swiper>
</section>

  );
}