import React from 'react';
import Marquee from "react-fast-marquee";
import logo2 from '../../../assets/brands/amazon_vector.png';
import logo3 from '../../../assets/brands/casio.png';
import logo4 from '../../../assets/brands/moonstar.png';
import logo5 from '../../../assets/brands/randstad.png';
import logo6 from '../../../assets/brands/star.png';
import logo7 from '../../../assets/brands/start_people.png';

export default function Collab() {
    const logos = [logo2,logo3,logo4,logo5,logo6,logo7]
  return (
    <div className='h-25.5 mt-25 mb-25'>
        <div>
            <h1 className='text-[#03373D] font-extrabold text-[28px] text-center'>We've helped thousands of sales teams</h1>
        </div>
       <Marquee>
            {logos.map((logo, index) => {
                return(
                    <div className='mx-10 mt-10.5'>
                        <img src={logo} key={index} alt="" />
                    </div>
                )
            })}
       </Marquee>
    </div>
  );
}
