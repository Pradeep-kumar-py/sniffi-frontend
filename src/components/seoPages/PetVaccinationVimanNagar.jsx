import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationVimanNagar = () => (
  <PetVaccinationLayout
    area="Viman Nagar"
    slug="viman-nagar"
    region="East Pune"
    nearby={["Kharadi", "Kalyani Nagar", "Lohegaon", "Koregaon Park"]}
    introIndex={0}
  />
);

export default PetVaccinationVimanNagar;
