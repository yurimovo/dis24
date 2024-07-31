import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
//import { useNavigate } from 'react-router';
import { Watch } from "react-loader-spinner";
import { toast } from 'react-toastify';
import FacilityRow from "./facility-row/FacilityRow";
import FacilityDislocation from './facility-dislocation/FacilityDislocation';
import Error403 from '../../assetts/403.png';
import { useAuth } from 'hooks/userAuth.hook';

import "./style.scss";

import { FacilityInList, Facility } from '../../types/facilities';
import { fetchFacilities } from "../../service-functions/facilities/fetchFacilities";
import { createFacility } from "../../service-functions/facilities/createFacility";

const Facilities = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [facilities, setFacilities] = useState<Array<FacilityInList>>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<Facility>({
        organization: '',
        facility: '',
        address: '',
        security_type: '',
        contruct_number: '',
        contruct_date: '',
        price: '',
        price_date: '',
        ownership_type: '',
        facility_category: '',
        contruct_file_number: '',
        lettered_file_number: '',
        spi: '',
        facility_hardware: '',
        surving_organization: '',
        mounting_organization: '',
        pult_number: '',
        sim_number: '',
        responsible: '',
        assortment: '',
        security_hours: '',
        comm_year: ''
    });

    //const navigate = useNavigate();
    const { isAuth } = useAuth();

    const reloadPage = () => {
        window.location.reload();
    };

    const handleToggleModal = () => setShowModal(!showModal);

    const handleFacilitySave = async (e: React.FormEvent) => {
        console.log('form data', formData);
        e.preventDefault();
        try {
            await createFacility(formData);
            toast.success('Объект создан', {
                onClose: () => {
                    fetchFacilities().then((response) => {
                        setFacilities(response);
                        setShowModal(false);
                    }).catch(error => {
                        console.error(error);
                    });
                }
            });
        } catch (error) {
            toast.error('Ошибка создания объекта');
        }
    };

    const handleFacilityCancel = () => {
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
        fetchFacilities().then((response) => {
            setFacilities(response);
            setLoading(false);
        }).catch(error => {
            console.error(error);
            setLoading(false);
        });
    },[]);

    return isAuth ? (
        <div className='container facilities'>
            <div className='row pageHeader'>
                Дислокация объектов
            </div>
            <div className='row'>
                <div className='col-xl-12 col-lg-12-col-md-12' style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Button variant='success' onClick={handleToggleModal}>
                        Добавить
                    </Button>
                    <FacilityDislocation />
                    {/* <Button variant='primary' onClick={handlePDF} style={{marginLeft: '10px'}}>Экспорт в PDF</Button> */}
                </div>
            </div>
            <div className='row tableHeader'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1'>№ п/п</div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>Организация</div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>Объект</div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>Адрес</div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2'>Действия</div>
            </div>
            {facilities.length === 0 ? 
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '100px', 
                    fontWeight: 500, 
                    fontSize: '32px', 
                    color: '#b5533e' 
                }}>Объекты отсутствуют</div> : isLoading ? 
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
                        (facilities || []).map((facility: FacilityInList, idx) => (
                            <FacilityRow
                                facility={facility}
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
                                <Form.Control className='textField' type='text' placeholder='Организация' id='organization' onChange={handleChange} value={formData.organization} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Объект' id='facility' onChange={handleChange} value={formData.facility} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Адрес' id='address' onChange={handleChange} value={formData.address} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='№ договора' id='contruct_number' onChange={handleChange} value={formData.contruct_number} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Дата договора' id='contruct_date' onChange={handleChange} value={formData.contruct_date} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Тариф в месяц' id='price' onChange={handleChange} value={formData.price} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Дата тарифа' id='price_date' onChange={handleChange} value={formData.price_date} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Форма собственности' id='ownership_type' onChange={handleChange} value={formData.ownership_type} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Категория объекта' id='facility_category' onChange={handleChange} value={formData.facility_category} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Вид охраны' id='security_type' onChange={handleChange} value={formData.security_type} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='№ договорного дела' id='contruct_file_number' onChange={handleChange} value={formData.contruct_file_number} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='№ литерного дела' id='lettered_file_number' onChange={handleChange} value={formData.lettered_file_number} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='СПИ' id='spi' onChange={handleChange} value={formData.spi} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Оборудование' id='facility_hardware' onChange={handleChange} value={formData.facility_hardware} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Обслуживающая организация' id='surving_organization' onChange={handleChange} value={formData.surving_organization} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Монтажная организация' id='mounting_organization' onChange={handleChange} value={formData.mounting_organization} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Пультовый номер' id='pult_number' onChange={handleChange} value={formData.pult_number} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Номер SIM-карты' id='sim_number' onChange={handleChange} value={formData.sim_number} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Ответственное лицо' id='responsible' onChange={handleChange} value={formData.responsible} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Подбор' id='assortment' onChange={handleChange} value={formData.assortment} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Часы охраны' id='security_hours' onChange={handleChange} value={formData.security_hours} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Год ввода в эксплуатацию' id='comm_year' onChange={handleChange} value={formData.comm_year} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='modalFooter'>
                    <Button variant="secondary" onClick={handleFacilityCancel}>
                        Закрыть
                    </Button>
                    <Button variant="success" onClick={handleFacilitySave}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    ) : (
        <div className='container facilities' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={Error403} alt='Доступ запрещен' style={{ width: '400px', height: 'auto' }} />
        </div>
    );
};

export default Facilities;