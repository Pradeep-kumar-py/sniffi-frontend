import React from 'react';
import PetVaccinationLayout from './PetVaccinationLayout';

const PetVaccinationKoregaonPark = () => (
  <PetVaccinationLayout
    area="Koregaon Park"
    slug="koregaon-park"
    region="East Pune"
    nearby={["Kalyani Nagar", "Mundhwa", "Viman Nagar"]}
    introIndex={9}
  />
);

export default PetVaccinationKoregaonPark;
