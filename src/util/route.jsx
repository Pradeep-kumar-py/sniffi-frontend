import Diagnostics from "../components/Diagnostics";
import EmergencyCare from "../components/EmergencyCare";
import Mating from "../components/Mating";
import PetRegistration from "../components/PetRegistration";
import Vaccination from "../components/Vaccination";
import VetConsultation from "../components/VetConsultation";
import Wellness from "../components/Wellness";



const routes = [
  { path: '/services/vet-consultation', element: <VetConsultation /> },
  { path: '/services/wellness', element: <Wellness /> },
  { path: '/services/vaccination', element: <Vaccination /> },
  { path: '/services/pet-registration', element: <PetRegistration /> },
  { path: '/services/diagnostics', element: <Diagnostics /> },
  { path: '/services/mating', element: <Mating /> },
  { path: '/services/emergency-care', element: <EmergencyCare /> },
];

export default routes;