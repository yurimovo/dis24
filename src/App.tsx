import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './pages/header/Header';
import MainPage from "./pages/main-page/MainPage";
import Facilities from "./pages/facilities/Facilities";
import FacilityInfo from './pages/facilities/facility-info/FacilityInfo';
import FacilityPDF from './pages/facilities/facility-pdf/FacilityPDF';
import Apartments from './pages/apartments/Apartments';
import ApartmentInfo from "./pages/apartments/apartment-info/ApartmentInfo";
import Organizations from "./pages/organizations/Organizations";
import Owners from "./pages/owners/Owners";
import FacilityEdit from './pages/facilities/facility-edit/FacilityEdit';

import "./main-container.scss";

function App() {
    return (
        <div className="App">
            <div className='template-container'>
                <Header />
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/facilities'} element={<Facilities />} />
                    <Route path={'/facility-info/:id'} element={<FacilityInfo />} />
                    <Route path={'/facility-edit/:id'} element={<FacilityEdit />} />
                    <Route path={'/facility-pdf'} element={<FacilityPDF />} />
                    <Route path={'/apartments'} element={<Apartments />} />
                    <Route path={'/apartment-info/:id'} element={<ApartmentInfo />} />
                    <Route path={'/organizations'} element={<Organizations />} />
                    <Route path={'/owners'} element={<Owners />} />
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