import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationSangvi = () => (
  <PetVaccinationLayout
    area="Sangvi"
    slug="sangvi"
    region="PCMC"
    nearby={["Aundh", "Pimple Gurav", "Pimpri"]}
    introIndex={19}
  />
);

export default PetVaccinationSangvi;
