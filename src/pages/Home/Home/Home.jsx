import React from 'react';
import Banner from '../banner/Banner';
import ServiceSection from '../serviceSection/ServiceSection';
import Work from '../work/Work';
import Collab from '../collab/Collab';
import BenefitsSection from '../benefitsSection/benefitsSection';

function Home() {
  return (
    <div>
      <Banner/>
      <Work/>
      <ServiceSection/>
      <Collab/>
      <BenefitsSection/>
    </div>
  );
}

export default Home;
