import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationLohegaon = () => (
  <PetVaccinationLayout
    area="Lohegaon"
    slug="lohegaon"
    region="North-East Pune"
    nearby={["Dhanori", "Viman Nagar", "Pride World City"]}
    introIndex={5}
  />
);

export default PetVaccinationLohegaon;
