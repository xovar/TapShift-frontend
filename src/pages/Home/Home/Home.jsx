import React from 'react';
import Banner from '../banner/Banner';
import ServiceSection from '../serviceSection/ServiceSection';
import Work from '../work/Work';
import Collab from '../collab/Collab';
import BenefitsSection from '../benefitsSection/benefitsSection';
import Merchant from '../../merchant/Merchant';

function Home() {
  return (
    <div>
      <Banner/>
      <Work/>
      <ServiceSection/>
      <Collab/>
      <BenefitsSection/>
      <Merchant/>
    </div>
  );
}

export default Home;
