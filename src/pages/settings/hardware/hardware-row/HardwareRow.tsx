import React from 'react';

import { HardwareInList } from 'types/hardware';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import store from '../../../../store';
import { toast } from 'react-toastify';

import './style.scss';

import EditIcon from '../../../../assetts/edit.png';
import DeleteIcon from '../../../../assetts/delete.png'

import { deleteHardware } from '../../../../service-functions/hardware/deleteHardware';

interface IHardware {
    hardware: HardwareInList;
    idx: number;
    reloadPage: () => void;
}

const HardwareRow: React.FC<IHardware> = observer (({ hardware, idx, reloadPage }) => {
    const { changeActiveHardware, changeEditingHardware } = store;
    const navigate = useNavigate();

    /* const changeId = () => {
        changeActiveDepartment(dep.id);
        navigate(`/department-info/${dep.id}`);
    }; */

    /* const handleEditClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        changeEditingDepartment(dep.id);
        navigate(`/department-edit/${dep.id}`);
    }; */

    const deleteHardwareWithConfirmation = async (id: number) => {
        const userConfirmed = window.confirm("Вы уверены, что хотите удалить оборудование?");
        if (userConfirmed) {
            try {
                const result = await deleteHardware(id);
                toast.success(`Оборудование ${hardware.hardware_name} удалено`, {
                    onClose: () => { 
                        navigate('/settings', { replace: true });
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
            await deleteHardwareWithConfirmation(id);
        } catch (error) {
            console.error('Ошибка при удалении оборудования:', error);
            toast.error(`Ошибка удаления оборудования ${hardware.hardware_name}`);
        }
    };

    return (
        <div className='container hardwareRowContainer' /* onClick={changeId} */>
            <div className='row hardwareRow'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 rowElement'>
                    {idx}
                </div>
                <div className='col-xxl-9 col-xl-9 col-lg-9 col-md-9 rowElement'>
                    {hardware.hardware_name}
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 rowElement actions'>
                    <img src={EditIcon} alt='Edit Icon' /* onClick={handleEditClick} */ />
                    <img src={DeleteIcon} alt='Delete Icon' /* onClick={(e) => handleDeleteClick(e, dep.id)} */ />
                </div>
            </div>
        </div>
    );
});

export default HardwareRow;