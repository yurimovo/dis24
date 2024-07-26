import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './pages/header/Header';
import MainPage from "./pages/main-page/MainPage";
import Auth from './pages/main-page/auth/Auth';
import Register from './pages/main-page/register/Register';
import Facilities from "./pages/facilities/Facilities";
import FacilityInfo from './pages/facilities/facility-info/FacilityInfo';
import FacilityEdit from './pages/facilities/facility-edit/FacilityEdit';
import FacilityPDF from './pages/facilities/facility-pdf/FacilityPDF';
import Apartments from './pages/apartments/Apartments';
import ApartmentInfo from "./pages/apartments/apartment-info/ApartmentInfo";
import ApartmentEdit from './pages/apartments/apartment-edit/ApartmentEdit';
import Organizations from "./pages/organizations/Organizations";
import Owners from "./pages/owners/Owners";
import Simcards from './pages/sim-cards/Simcards';
import SimEdit from './pages/sim-cards/sim-edit/SimEdit';
import SimInfo from './pages/sim-cards/sim-info/SimInfo';
import Alarms from './pages/alarms/Alarms';

import "./main-container.scss";

function App() {
    return (
        <div className="App">
            <div className='template-container'>
                <Header />
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/auth'} element={<Auth />} />
                    <Route path={'/register'} element={<Register />} />
                    <Route path={'/facilities'} element={<Facilities />} />
                    <Route path={'/facility-info/:id'} element={<FacilityInfo />} />
                    <Route path={'/facility-edit/:id'} element={<FacilityEdit />} />
                    <Route path={'/facility-pdf'} element={<FacilityPDF />} />
                    <Route path={'/apartments'} element={<Apartments />} />
                    <Route path={'/apartment-info/:id'} element={<ApartmentInfo />} />
                    <Route path={'/apartment-edit/:id'} element={<ApartmentEdit />} />
                    <Route path={'/organizations'} element={<Organizations />} />
                    <Route path={'/owners'} element={<Owners />} />
                    <Route path={'/simcards'} element={<Simcards />} />
                    <Route path={'/simcard-edit/:id'} element={<SimEdit />} />
                    <Route path={'/simcard-info/:id'} element={<SimInfo />} />
                    <Route path={'/alarms'} element={<Alarms />} />
                    <Route path="*" element={<MainPage />} />
                </Routes>
                <ToastContainer 
                    position = "bottom-left"
                    autoClose = {2000}
                    hideProgressBar = {false} 
                    closeOnClick = {true}
                    pauseOnHover = {true} 
                    draggable = {false}
                />
            </div>
        </div>
    );
}

export default App;