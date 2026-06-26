import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationKharadi = () => (
  <PetVaccinationLayout
    area="Kharadi"
    slug="kharadi"
    region="East Pune"
    nearby={["Viman Nagar", "Wagholi", "Magarpatta City", "Kalyani Nagar"]}
    introIndex={1}
  />
);

export default PetVaccinationKharadi;
