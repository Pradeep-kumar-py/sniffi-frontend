import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationTathawade = () => (
  <PetVaccinationLayout
    area="Tathawade"
    slug="tathawade"
    region="West Pune / PCMC"
    nearby={["Wakad", "Hinjewadi", "Punawale"]}
    introIndex={20}
  />
);

export default PetVaccinationTathawade;
