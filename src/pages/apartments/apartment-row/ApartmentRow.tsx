import React from 'react';

import { ApartmentInList } from '../../../types/apartments';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import store from '../../../store';
import { toast } from 'react-toastify';

import './style.scss';

import EditIcon from '../../../assetts/edit.png';
import DeleteIcon from '../../../assetts/delete.png';

import { deleteApartment } from '../../../service-functions/apartments/deleteApartment';

interface IApartmentRow {
    apartment: ApartmentInList;
    idx: number;
    reloadPage: () => void;
}

const ApartmentRow: React.FC<IApartmentRow> = observer(({apartment, idx, reloadPage}) => {
    const { changeActiveApartment, changeEditingApartment } = store;
    const navigate = useNavigate();

    const changeId = () => {
        changeActiveApartment(apartment.apartment_id);
        navigate(`/apartment-info/${apartment.apartment_id}`);
    };

    const handleEditClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        changeEditingApartment(apartment.apartment_id);
        navigate(`/apartment-edit/${apartment.apartment_id}`);
    };

    const deleteApartmentWithConfirmation = async (id: number) => {
        const userConfirmed = window.confirm("Вы уверены, что хотите удалить МПХИГ?");
        if (userConfirmed) {
            try {
                const result = await deleteApartment(id);
                toast.success(`МПХИГ ${apartment.owner} удален`, {
                    onClose: () => { 
                        navigate('/apartments', { replace: true });
                        reloadPage();
                }});

                return result;
            } catch (error: any) {
                throw error;
            }
        } else {
            toast.info('Удаление отменено');
        }
    };

    const handleDeleteClick = async (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        try {
            await deleteApartmentWithConfirmation(id);
        } catch (error) {
            console.error('Ошибка при удалении МПХИГ:', error);
            toast.error(`Ошибка удаления МПХИГ ${apartment.owner}`);
        }
    };

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
                    <img src={EditIcon} alt='Edit Icon' onClick={handleEditClick} />
                    <img src={DeleteIcon} alt='Delete Icon' onClick={(e) => handleDeleteClick(e, apartment.apartment_id)} />
                </div>
            </div>
        </div>
    );
});

export default ApartmentRow; 