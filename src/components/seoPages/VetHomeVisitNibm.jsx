import React from 'react';
import VetHomeVisitLayout from './VetHomeVisitLayout';

const VetHomeVisitNibm = () => (
  <VetHomeVisitLayout
    area="NIBM"
    slug="nibm"
    region="South-East Pune"
    nearby={["Kondhwa", "Undri", "Mohammadwadi"]}
    introIndex={4}
  />
);

export default VetHomeVisitNibm;
