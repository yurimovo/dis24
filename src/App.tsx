import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './pages/header/Header';
import MainPage from "./pages/main-page/MainPage";
import Facilities from "./pages/facilities/Facilities";
import NewFacility from "./pages/facilities/new-facility/NewFacility";

import "./main-container.scss";

function App() {
    return (
        <div className="App">
            <div className='template-container'>
                <Header />
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/facilities'} element={<Facilities />} />
                    <Route path={'/new-facility'} element={<NewFacility />} />
                    <Route path="*" element={<MainPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;