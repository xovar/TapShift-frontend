import React from 'react';
import logo from '../../../assets/logo.png'

function TapShiftLogo() {
  return (
    <div className='flex items-end'>
      <img className='' src={logo} alt="" />
      <p className='font-extrabold text-[20px] -ml-4'>TapShift</p>
    </div>
  );
}

export default TapShiftLogo;
