import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Watch } from "react-loader-spinner";
import { toast } from 'react-toastify';

import AlarmRow from "./alarm-row/AlarmRow";

import "./style.scss";

import { Alarm, AlarmInList } from '../../types/alarms';
import { FacilityForForm } from '../../types/facilities';
import { fetchAllAlarms } from "../../service-functions/alarms/fetchAllAlarms";
import { fetchFacilitiesForForm } from '../../service-functions/facilities/fetchFacilitiesForForm';
import { createAlarm } from "../../service-functions/alarms/createAlarm";

const Alarms = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [alarmList, setAlarmList] = useState<Array<AlarmInList>>([]);
    const [facilities, setFacilities] = useState<Array<FacilityForForm>>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<Alarm>({
        facility: '',
        alarm_date: ''
    });

    const reloadPage = () => {
        window.location.reload();
    };

    const handleToggleModal = () => setShowModal(!showModal);

    const handleAlarmSave = async (e: React.FormEvent) => {
        console.log('form data', formData);
        e.preventDefault();
        try {
            await createAlarm(formData);
            toast.success('Ложняк добавлен', {
                onClose: () => {
                    fetchAllAlarms().then((response) => {
                        setAlarmList(response);
                        setShowModal(false);
                    }).catch(error => {
                        console.error(error);
                    });
                }
            });
        } catch (error) {
            toast.error('Ошибка создания ложняка');
        }
    };

    const handleAlarmCancel = () => {
        setShowModal(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({...formData, [id]: value})
    };

    const handleFacilitySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData({...formData, [id]: value})
    };

    /* const handlePDF = () => {
        navigate('/facility-pdf');
    } */

    useEffect(() => {
        setLoading(true);
        fetchAllAlarms().then((response) => {
            setAlarmList(response);
        }).then(() => {
            fetchFacilitiesForForm().then((response) => {
                setFacilities(response);
                setLoading(false);
            }).catch(error => {
            console.error(error);
            setLoading(false);
        });
        })
    },[]);

    return (
        <div className='container alarms'>
            <div className='row pageHeader'>
                Ложняки
            </div>
            <div className='row'>
                <div className='col-xl-12 col-lg-12-col-md-12' style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Button variant='success' onClick={handleToggleModal}>
                        Добавить
                    </Button>
                    {/* <Button variant='primary' onClick={handlePDF} style={{marginLeft: '10px'}}>Экспорт в PDF</Button> */}
                </div>
            </div>
            <div className='row tableHeader'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1'>№ п/п</div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>Дата сработки</div>
                <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7'>Объект</div>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1'>Действия</div>
            </div>
            {alarmList.length === 0 ? 
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '100px', 
                    fontWeight: 500, 
                    fontSize: '32px', 
                    color: '#b5533e' 
                }}>Ложняки отсутствуют</div> : isLoading ? 
                <Watch
                    visible={true}
                    height="80"
                    width="80"
                    radius="48"
                    color="#b5533e"
                    ariaLabel="watch-loading"
                    wrapperStyle={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '100px'
                    }}
                    wrapperClass=""
                /> :
                <div className='row'>
                    {
                        (alarmList || []).map((alarm: AlarmInList, idx, key) => (
                            <AlarmRow
                                alarm={alarm}
                                idx={idx+1}
                                key={idx}
                                reloadPage={reloadPage}
                            />
                        ))
                    }
                </div>
            }
            <Modal show={showModal} onHide={handleToggleModal} centered size='lg'>
                <Modal.Header className='modalHeader' closeButton>
                    <Modal.Title>Добавление ложняка</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <div className='container'>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
                                <Form.Control className='textField' type='text' placeholder='Дата сработки' id='alarm_date' onChange={handleChange} value={formData.alarm_date} />
                            </div>
                            <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-8'>
                                <select className='form-select' id='facility' onChange={handleFacilitySelect}>
                                    <option selected>Объект</option>
                                    {facilities.map((facility, idx) => (
                                        <option key={idx} value={facility.facility}>{facility.facility}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='modalFooter'>
                    <Button variant="secondary" onClick={handleAlarmCancel}>
                        Закрыть
                    </Button>
                    <Button variant="success" onClick={handleAlarmSave}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Alarms;