import React from 'react';
import VetHomeVisitLayout from './VetHomeVisitLayout';

const VetHomeVisitWakad = () => (
  <VetHomeVisitLayout
    area="Wakad"
    slug="wakad"
    region="West Pune / PCMC"
    nearby={["Hinjewadi", "Baner", "Tathawade", "Pimple Saudagar"]}
    introIndex={10}
  />
);

export default VetHomeVisitWakad;
