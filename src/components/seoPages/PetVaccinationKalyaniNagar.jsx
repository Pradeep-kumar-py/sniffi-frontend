import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationKalyaniNagar = () => (
  <PetVaccinationLayout
    area="Kalyani Nagar"
    slug="kalyani-nagar"
    region="East Pune"
    nearby={["Koregaon Park", "Viman Nagar", "Kharadi"]}
    introIndex={2}
  />
);

export default PetVaccinationKalyaniNagar;
