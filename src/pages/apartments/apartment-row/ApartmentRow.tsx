import React from 'react';

import { ApartmentInList } from '../../../types/apartments';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import store from '../../../store';

import './style.scss';

import EditIcon from '../../../assetts/edit.png';
import DeleteIcon from '../../../assetts/delete.png';

interface IApartmentRow {
    apartment: ApartmentInList;
    idx: number;
}

const ApartmentRow: React.FC<IApartmentRow> = observer(({apartment, idx}) => {
    const { changeApartmentId } = store;
    const navigate = useNavigate();

    const changeId = () => {
        changeApartmentId(apartment.apartment_id);
        navigate(`/apartment-info/${apartment.apartment_id}`);
    }

    return (
        <div className='container apartmentRowContainer' onClick={changeId}>
            <div className='row apartmentRow'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 rowElement'>
                    {idx}
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 rowElement'>
                    {apartment.owner}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {apartment.address}
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 rowElement'>
                    {apartment.contruct_number}
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 rowElement actions'>
                    <img src={EditIcon} alt='Edit Icon' />
                    <img src={DeleteIcon} alt='Delete Icon' />
                </div>
            </div>
        </div>
    );
});

export default ApartmentRow;