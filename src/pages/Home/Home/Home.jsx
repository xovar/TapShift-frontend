import React from 'react';
import Banner from '../banner/Banner';
import ServiceSection from '../serviceSection/ServiceSection';
import Work from '../work/Work';
import Collab from '../collab/Collab';

function Home() {
  return (
    <div>
      <Banner/>
      <Work/>
      <ServiceSection/>
      <Collab></Collab>
    </div>
  );
}

export default Home;
