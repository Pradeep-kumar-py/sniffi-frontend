import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationWakad = () => (
  <PetVaccinationLayout
    area="Wakad"
    slug="wakad"
    region="West Pune / PCMC"
    nearby={["Hinjewadi", "Baner", "Tathawade", "Pimple Saudagar"]}
    introIndex={10}
  />
);

export default PetVaccinationWakad;
