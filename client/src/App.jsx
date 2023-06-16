// import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import NotFoundPage from './Pages/NotFoundPage';
import UpdateProfile from './Pages/UpdateProfile';
import FlightOfferSearchPage from './Pages/FlightOfferSearchPage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/update-profile' element={<UpdateProfile />} />
        <Route path='/offer-search' element={<FlightOfferSearchPage />} />
       

        {/* <Route path='/user/*' element={<UserRoutes />} /> */}

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;