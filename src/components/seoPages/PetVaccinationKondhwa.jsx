import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationKondhwa = () => (
  <PetVaccinationLayout
    area="Kondhwa"
    slug="kondhwa"
    region="South-East Pune"
    nearby={["NIBM", "Wanowrie", "Undri"]}
    introIndex={3}
  />
);

export default PetVaccinationKondhwa;
