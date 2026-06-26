import React from 'react';
import VetHomeVisitLayout from './VetHomeVisitLayout';

const VetHomeVisitKharadi = () => (
  <VetHomeVisitLayout
    area="Kharadi"
    slug="kharadi"
    region="East Pune"
    nearby={["Viman Nagar", "Wagholi", "Magarpatta City", "Kalyani Nagar"]}
    introIndex={1}
  />
);

export default VetHomeVisitKharadi;
