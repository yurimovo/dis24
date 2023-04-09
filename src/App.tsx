import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './pages/header/Header';
import MainPage from "./pages/main-page/MainPage";
import Facilities from "./pages/facilities/Facilities";
import Organizations from "./pages/organizations/Organizations";
import Apartments from './pages/apartments/Apartments';
import Owners from "./pages/owners/Owners";

import "./main-container.scss";

function App() {
    return (
        <div className="App">
            <div className='template-container'>
                <Header />
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/facilities'} element={<Facilities />} />
                    <Route path={'/organizations'} element={<Organizations />} />
                    <Route path={'/owners'} element={<Owners />} />
                    <Route path={'/apartments'} element={<Apartments />} />
                    <Route path="*" element={<MainPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;