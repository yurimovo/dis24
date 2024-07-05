import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Watch } from "react-loader-spinner";
import { toast } from 'react-toastify';

import SimRow from "./sim-row/SimRow";

import "./style.scss";

import { SimcardInList, Simcard } from '../../types/simcards';
import { fetchSimcards } from "../../service-functions/simcards/fetchSimcards";
import { createSim } from "../../service-functions/simcards/createSim";

const Simcards = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [simList, setSimList] = useState<Array<SimcardInList>>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<Simcard>({
        sim_number: '',
        fccid: '',
        object: '',
        address: '',
        pult_number: '',
        mounting_date: ''
    });

    //const navigate = useNavigate();

    const reloadPage = () => {
        window.location.reload();
    };

    const handleToggleModal = () => setShowModal(!showModal);

    const handleSimSave = async (e: React.FormEvent) => {
        console.log('form data', formData);
        e.preventDefault();
        try {
            await createSim(formData);
            toast.success('SIM-карта добавлена', {
                onClose: () => {
                    fetchSimcards().then((response) => {
                        setSimList(response);
                        setShowModal(false);
                    }).catch(error => {
                        console.error(error);
                    });
                }
            });
        } catch (error) {
            toast.error('Ошибка создания SIM-карты');
        }
    };

    const handleSimCancel = () => {
        setShowModal(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({...formData, [id]: value})
    };

    /* const handlePDF = () => {
        navigate('/facility-pdf');
    } */

    useEffect(() => {
        setLoading(true);
        fetchSimcards().then((response) => {
            setSimList(response);
            setLoading(false);
        }).catch(error => {
            console.error(error);
            setLoading(false);
        });
    },[]);

    return (
        <div className='container simcards'>
            <div className='row pageHeader'>
                Дислокация SIM-карт
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
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>№ SIM-карты</div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>FCCID</div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>Место установки</div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2'>Действия</div>
            </div>
            {simList.length === 0 ? 
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '100px', 
                    fontWeight: 500, 
                    fontSize: '32px', 
                    color: '#b5533e' 
                }}>SIM-карты отсутствуют</div> : isLoading ? 
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
                        (simList || []).map((sim: SimcardInList, idx) => (
                            <SimRow
                                simcard={sim}
                                idx={idx+1}
                                reloadPage={reloadPage}
                            />
                        ))
                    }
                </div>
            }
            <Modal show={showModal} onHide={handleToggleModal} centered size='lg'>
                <Modal.Header className='modalHeader' closeButton>
                    <Modal.Title>Добавление объекта</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <div className='container'>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='№ SIM-карты' id='sim_number' onChange={handleChange} value={formData.sim_number} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='FCCID' id='fccid' onChange={handleChange} value={formData.fccid} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Место установки' id='object' onChange={handleChange} value={formData.object} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Адрес' id='address' onChange={handleChange} value={formData.address} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Пультовый №' id='pult_number' onChange={handleChange} value={formData.pult_number} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Дата установки' id='mounting_date' onChange={handleChange} value={formData.mounting_date} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='modalFooter'>
                    <Button variant="secondary" onClick={handleSimCancel}>
                        Закрыть
                    </Button>
                    <Button variant="success" onClick={handleSimSave}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Simcards;