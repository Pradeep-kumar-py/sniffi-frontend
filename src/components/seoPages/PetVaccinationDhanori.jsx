import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationDhanori = () => (
  <PetVaccinationLayout
    area="Dhanori"
    slug="dhanori"
    region="North-East Pune"
    nearby={["Lohegaon", "Vishrantwadi", "Pride World City"]}
    introIndex={6}
  />
);

export default PetVaccinationDhanori;
