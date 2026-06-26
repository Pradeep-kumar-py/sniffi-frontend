import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationBaner = () => (
  <PetVaccinationLayout
    area="Baner"
    slug="baner"
    region="West Pune"
    nearby={["Balewadi", "Aundh", "Wakad", "Pashan"]}
    introIndex={15}
  />
);

export default PetVaccinationBaner;
