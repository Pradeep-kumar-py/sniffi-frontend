import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationBalewadi = () => (
  <PetVaccinationLayout
    area="Balewadi"
    slug="balewadi"
    region="West Pune"
    nearby={["Baner", "Aundh", "Wakad"]}
    introIndex={16}
  />
);

export default PetVaccinationBalewadi;
