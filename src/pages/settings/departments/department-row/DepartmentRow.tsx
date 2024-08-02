import React from 'react';

import { DepartmentInList } from 'types/departments';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import store from '../../../../store';
import { toast } from 'react-toastify';

import './style.scss';

import EditIcon from '../../../../assetts/edit.png';
import DeleteIcon from '../../../../assetts/delete.png'

import { deleteDepartment } from '../../../../service-functions/departments/deleteDepartment';

interface IDepartment {
    dep: DepartmentInList;
    idx: number;
    reloadPage: () => void;
}

const SimRow: React.FC<IDepartment> = observer (({ dep, idx, reloadPage }) => {
    const { changeActiveDepartment, changeEditingDepartment } = store;
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

    const deleteDepWithConfirmation = async (id: number) => {
        const userConfirmed = window.confirm("Вы уверены, что хотите удалить подразделение?");
        if (userConfirmed) {
            try {
                const result = await deleteDepartment(id);
                toast.success(`Подразделение ${dep.short_name} удалено`, {
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
            await deleteDepWithConfirmation(id);
        } catch (error) {
            console.error('Ошибка при удалении подразделения:', error);
            toast.error(`Ошибка удаления подразделения ${dep.short_name}`);
        }
    };

    return (
        <div className='container depRowContainer' /* onClick={changeId} */>
            <div className='row depRow'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 rowElement'>
                    {idx}
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 rowElement'>
                    {dep.short_name}
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 rowElement'>
                    {dep.inn}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {dep.company_director}
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 rowElement actions'>
                    <img src={EditIcon} alt='Edit Icon' /* onClick={handleEditClick} */ />
                    <img src={DeleteIcon} alt='Delete Icon' /* onClick={(e) => handleDeleteClick(e, dep.id)} */ />
                </div>
            </div>
        </div>
    );
});

export default SimRow;