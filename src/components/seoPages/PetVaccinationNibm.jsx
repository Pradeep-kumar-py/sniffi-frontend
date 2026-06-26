import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationNibm = () => (
  <PetVaccinationLayout
    area="NIBM"
    slug="nibm"
    region="South-East Pune"
    nearby={["Kondhwa", "Undri", "Mohammadwadi"]}
    introIndex={4}
  />
);

export default PetVaccinationNibm;
