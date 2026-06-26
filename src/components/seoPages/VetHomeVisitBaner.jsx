import React from 'react';
import VetHomeVisitLayout from './VetHomeVisitLayout';

const VetHomeVisitBaner = () => (
  <VetHomeVisitLayout
    area="Baner"
    slug="baner"
    region="West Pune"
    nearby={["Balewadi", "Aundh", "Wakad", "Pashan"]}
    introIndex={15}
  />
);

export default VetHomeVisitBaner;
