import React from 'react';

import { FacilityInList } from '../../../types/facilities';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import store from '../../../store';
import { ToastContainer, toast } from 'react-toastify';

import './style.scss';

import EditIcon from '../../../assetts/edit.png';
import DeleteIcon from '../../../assetts/delete.png';

import { deleteFacility } from '../../../service-functions/facilities/deleteFacility';
import { fetchFacilities } from '../../../service-functions/facilities/fetchFacilities';

interface IFacility {
    facility: FacilityInList;
    idx: number;
    reloadPage: () => void;
}

const FacilityRow: React.FC<IFacility> = observer (({ facility, idx, reloadPage }) => {
    const { changeActiveFacility, changeEditingFacility } = store;
    const navigate = useNavigate();

    const changeId = () => {
        changeActiveFacility(facility.facility_id);
        navigate(`/facility-info/${facility.facility_id}`);
    }

    const handleEditClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        changeEditingFacility(facility.facility_id);
        navigate(`/facility-edit/${facility.facility_id}`);
    }

    const deleteFacilityWithConfirmation = async (id: number) => {
        const userConfirmed = window.confirm("Вы уверены, что хотите удалить этот объект?");
        if (userConfirmed) {
            try {
                const result = await deleteFacility(id);
                toast.success(`Объект ${facility.facility} удален`, {
                    onClose: () => { 
                        navigate('/facilities', { replace: true });
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
            await deleteFacilityWithConfirmation(id);
        } catch (error) {
            console.error('Ошибка при удалении объекта:', error);
            toast.error(`Ошибка удаления объекта ${facility.facility}`);
        }
    };

    return (
        <div className='container facilityRowContainer' onClick={changeId}>
            <div className='row facilityRow'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 rowElement'>
                    {idx}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {facility.organization}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {facility.facility}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {facility.address}
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 rowElement actions'>
                    <img src={EditIcon} alt='Edit Icon' onClick={handleEditClick} />
                    <img src={DeleteIcon} alt='Delete Icon' onClick={(e) => handleDeleteClick(e, facility.facility_id)} />
                </div>
            </div>
        </div>
    );
});

export default FacilityRow;