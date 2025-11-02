import { useState } from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import ServicesPage from './pages/ServicesPage'
import TermsAndConditionPage from './pages/TermsAndConditionPage'
import PrivacyTerm from './pages/PrivacyTerm'
import BookAppointment from './pages/BookAppointment'
import { Route, Routes } from 'react-router-dom'
import ThankYouPage from './pages/ThankYouPage'
import routes from './util/route'
import ScrollToTop from './components/ScrollToTop'



function App() {
  const [count, setCount] = useState(0)

  return (
    // <HomePage />
    <>
      <Navbar />
       <ScrollToTop />
      {/* <ThankYouPage/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/terms" element={<TermsAndConditionPage />} />
        <Route path="/privacy" element={<PrivacyTerm />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  )
}

export default App
