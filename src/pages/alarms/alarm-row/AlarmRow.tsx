import React from 'react';

import { AlarmInList } from '../../../types/alarms';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import store from '../../../store';
import { toast } from 'react-toastify';

import './style.scss';

//mport EditIcon from '../../../assetts/edit.png';
import DeleteIcon from '../../../assetts/delete.png';

import { deleteAlarm } from '../../../service-functions/alarms/deleteAlarm';

interface IAlarm {
    alarm: AlarmInList;
    idx: number;
    reloadPage: () => void;
}

const AlarmRow: React.FC<IAlarm> = observer (({ alarm, idx, reloadPage }) => {
    const { changeActiveAlarm, changeEditingAlarm } = store;
    const navigate = useNavigate();

    /* const changeId = () => {
        changeActiveAlarm(alarm.alarm_id);
        navigate(`/alarm-info/${alarm.alarm_id}`);
    } */

    /* const handleEditClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        changeEditingAlarm(alarm.alarm_id);
        navigate(`/alarm-edit/${alarm.alarm_id}`);
    }; */

    const deleteAlarmWithConfirmation = async (id: number) => {
        const userConfirmed = window.confirm("Вы уверены, что хотите удалить ложняк?");
        if (userConfirmed) {
            try {
                const result = await deleteAlarm(id);
                toast.success(`Ложняк на объекте ${alarm.facility} удален`, {
                    onClose: () => { 
                        navigate('/alarms', { replace: true });
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
            await deleteAlarmWithConfirmation(id);
        } catch (error) {
            console.error('Ошибка при удалении ложняка:', error);
            toast.error(`Ошибка удаления ложняка на объекте ${alarm.facility}`);
        }
    };

    return (
        <div className='container alarmRowContainer' /* onClick={changeId} */>
            <div className='row alarmRow'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 rowElement'>
                    {idx}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {alarm.alarm_date}
                </div>
                <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7 rowElement'>
                    {alarm.facility}
                </div>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 rowElement actions'>
                    {/* <img src={EditIcon} alt='Edit Icon' onClick={handleEditClick} /> */}
                    <img src={DeleteIcon} alt='Delete Icon' onClick={(e) => handleDeleteClick(e, alarm.alarm_id)} />
                </div>
            </div>
        </div>
    );
});

export default AlarmRow;