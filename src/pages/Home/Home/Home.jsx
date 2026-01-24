import React from 'react';
import Banner from '../banner/Banner';
import ServiceSection from '../serviceSection/ServiceSection';
import Work from '../work/Work';

function Home() {
  return (
    <div>
      <Banner/>
      <Work/>
      <ServiceSection/>
    </div>
  );
}

export default Home;
