import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationAundh = () => (
  <PetVaccinationLayout
    area="Aundh"
    slug="aundh"
    region="West Pune"
    nearby={["Baner", "Balewadi", "Sangvi"]}
    introIndex={17}
  />
);

export default PetVaccinationAundh;
