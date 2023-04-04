import React from 'react';

import { Apartment } from '../../types/apartments';

import ApartmentRow from "./apartment-row/ApartmentRow";
import NewApartment from "./new-apartment/NewApartment";

import "./style.scss";

const Apartments = () => {

    const apartmentsList = [
        {
            uid: 111,
            owner: 'Иванов И.И.',
            address: 'г. Калачинск, ул. Ленина, д. 37',
            phoneNumber: '89019876543',
        },
        {
            uid: 222,
            owner: 'Петров П.П.',
            address: 'г. Калачинск, ул. Ленина, д. 42',
            phoneNumber: '89012198765',
        },
        {
            uid: 333,
            owner: 'Сидоров С.С.',
            address: 'г. Калачинск, ул. Ленина, д. 16',
            phoneNumber: '89014321987',
        },
    ]

    return (
        <div className='container apartments'>
            <div className='row pageHeader'>
                Дислокация квартир и МХИГ
            </div>
            <div className='row tableHeader'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 headerItem'>№ п/п</div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 headerItem'>Собственник</div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 headerItem'>Адрес</div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 headerItem'>№ телефона</div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 headerItem'>Действия</div>
            </div>
            <div className='row'>
                {
                    (apartmentsList || []).map((apartment: Apartment, idx) => (
                        <ApartmentRow
                            apartment={apartment}
                            idx={idx+1}
                        />
                    ))
                }
            </div>
            <div className='row'>
                <div className='col-xl-12 col-lg-12-col-md-12'>
                    <button type="button" className="btnApartmentAdd">Новая квартира</button>
                </div>
            </div>
        </div>
    );
};

export default Apartments;