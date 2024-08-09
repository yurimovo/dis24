import React from 'react';

import { SectypeInList } from 'types/sectypes';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import store from '../../../../store';
import { toast } from 'react-toastify';

import './style.scss';

import EditIcon from '../../../../assetts/edit.png';
import DeleteIcon from '../../../../assetts/delete.png'

import { deleteSectype } from '../../../../service-functions/sectypes/deleteSectype';

interface ISectype {
    sectype: SectypeInList;
    idx: number;
    reloadPage: () => void;
}

const SectypeRow: React.FC<ISectype> = observer (({ sectype, idx, reloadPage }) => {
    const { changeActiveSectype, changeEditingSectype } = store;
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

    const deleteSectypeWithConfirmation = async (id: number) => {
        const userConfirmed = window.confirm("Вы уверены, что хотите удалить вид охраны?");
        if (userConfirmed) {
            try {
                const result = await deleteSectype(id);
                toast.success(`Вид охраны ${sectype.type_name} удален`, {
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
            await deleteSectypeWithConfirmation(id);
        } catch (error) {
            console.error('Ошибка при удалении вида охраны:', error);
            toast.error(`Ошибка удаления вида охраны ${sectype.type_name}`);
        }
    };

    return (
        <div className='container sectypeRowContainer' /* onClick={changeId} */>
            <div className='row sectypeRow'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 rowElement'>
                    {idx}
                </div>
                <div className='col-xxl-9 col-xl-9 col-lg-9 col-md-9 rowElement'>
                    {sectype.type_name}
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 rowElement actions'>
                    <img src={EditIcon} alt='Edit Icon' /* onClick={handleEditClick} */ />
                    <img src={DeleteIcon} alt='Delete Icon' /* onClick={(e) => handleDeleteClick(e, dep.id)} */ />
                </div>
            </div>
        </div>
    );
});

export default SectypeRow;