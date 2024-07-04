import React from 'react';

import { SimcardInList } from '../../../types/simcards';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import store from '../../../store';
import { toast } from 'react-toastify';

import './style.scss';

import EditIcon from '../../../assetts/edit.png';
import DeleteIcon from '../../../assetts/delete.png';

//import { deleteFacility } from '../../../service-functions/facilities/deleteFacility';

interface ISimcard {
    simcard: SimcardInList;
    idx: number;
    reloadPage: () => void;
}

const SimRow: React.FC<ISimcard> = observer (({ simcard, idx, reloadPage }) => {
    const { changeActiveSim, changeEditingSim } = store;
    const navigate = useNavigate();

    /* const changeId = () => {
        changeActiveSim(simcard.sim_id);
        navigate(`/simcard-info/${simcard.sim_id}`);
    } */

    /* const handleEditClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        changeEditingSim(simcard.sim_id);
        navigate(`/simcard-edit/${simcard.sim_id}`);
    }; */

    /* const deleteSimWithConfirmation = async (id: number) => {
        const userConfirmed = window.confirm("Вы уверены, что хотите удалить SIM-карту?");
        if (userConfirmed) {
            try {
                const result = await deleteSim(id);
                toast.success(`SIM-карта ${simcard.sim_number} удалена`, {
                    onClose: () => { 
                        navigate('/simcards', { replace: true });
                        reloadPage();
                }});

                return result;
            } catch (error: any) {
                throw error;
            }
        } else {
            toast.info('Удаление отменено');
        }
    }; */

    /* const handleDeleteClick = async (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        try {
            await deleteSimWithConfirmation(id);
        } catch (error) {
            console.error('Ошибка при удалении SIM-карты:', error);
            toast.error(`Ошибка удаления SIM-карты ${simcard.sim_number}`);
        }
    }; */

    return (
        <div className='container simRowContainer' /* onClick={changeId} */>
            <div className='row simRow'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 rowElement'>
                    {idx}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {simcard.sim_number}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {simcard.fccid}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {simcard.object}
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 rowElement actions'>
                    <img src={EditIcon} alt='Edit Icon' /* onClick={handleEditClick} */ />
                    <img src={DeleteIcon} alt='Delete Icon' /* onClick={(e) => handleDeleteClick(e, simcard.sim_id)} */ />
                </div>
            </div>
        </div>
    );
});

export default SimRow;