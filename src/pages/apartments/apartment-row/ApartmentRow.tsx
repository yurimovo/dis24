import React from 'react';

import { Apartment } from '../../../types/apartments';

import './style.scss';

import EditIcon from '../../../assetts/edit.png';
import DeleteIcon from '../../../assetts/delete.png';

interface IApartment {
    apartment: Apartment;
    idx: number;
};

const ApartmentRow: React.FC<IApartment> = ({apartment, idx}) => {
    return (
        <div className='container apartmentRowContainer'>
            <div className='row apartmentRow'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 rowElement'>
                    {idx}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {apartment.owner}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {apartment.address}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {apartment.phoneNumber}
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 rowElement actions'>
                    <img src={EditIcon} alt='Edit Icon' />
                    <img src={DeleteIcon} alt='Delete Icon' />
                </div>
            </div>
        </div>
    );
};

export default ApartmentRow;