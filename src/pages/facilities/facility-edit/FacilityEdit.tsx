import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import store from "../../../store";
import { observer } from "mobx-react";
import { Watch } from "react-loader-spinner";
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { fetchEditFacilityById } from '../../../service-functions/facilities/fetchEditFacilityById';
import { updateFacility } from '../../../service-functions/facilities/updateFacility';
import { Facility } from "../../../types/facilities";

import './style.scss';
import 'react-toastify/dist/ReactToastify.css';


const FacilityEdit = observer(() => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { selectedEditingFacility } = store;
    const [selectedFacility, setSelectedFacility] = useState<Facility>({
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
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetchEditFacilityById(selectedEditingFacility)
        .then((result) => {
            setSelectedFacility(result);
            setLoading(false);
            console.log('selFacility', selectedFacility);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setSelectedFacility({...selectedFacility, [id]: value})
    }

    const handleCancel = () => {
        navigate('/facilities');
    };

    const handleSave = async () => {
        try {
            await updateFacility(selectedFacility, selectedEditingFacility);
            await toast.success(`Объект ${selectedFacility.facility} изменен`, {
                onClose: () => navigate('/facilities')
            });
        } catch (error) {
            console.error(error);
            toast.error(`Ошибка обновления объекта ${selectedFacility.facility}`);
        };
    };

    return (
        <div className='container facility-edit'>
            {isLoading ? 
                <Watch
                    visible={true}
                    height="80"
                    width="80"
                    radius="48"
                    color="#b5533e"
                    ariaLabel="watch-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                /> : 
                <div className="facility-edit__content">
                    <div className="facility-edit__content__header">Редактирование объекта</div>
                    <div className="facility-edit__content__facility">{ selectedFacility?.facility }</div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Организация' id='organization' onChange={handleChange} value={selectedFacility?.organization} />
                            </div>
                        </div>
                        <div className='row facility-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Объект' id='facility' onChange={handleChange} value={selectedFacility?.facility} />
                            </div>
                        </div>
                        <div className='row facility-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Адрес' id='address' onChange={handleChange} value={selectedFacility?.address} />
                            </div>
                        </div>
                        <div className='row facility-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='№ договора' id='contruct_number' onChange={handleChange} value={selectedFacility?.contruct_number} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Дата договора' id='contruct_date' onChange={handleChange} value={selectedFacility?.contruct_date} />
                            </div>
                        </div>
                        <div className='row facility-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Тариф в месяц' id='price' onChange={handleChange} value={selectedFacility?.price} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Дата тарифа' id='price_date' onChange={handleChange} value={selectedFacility?.price_date} />
                            </div>
                        </div>
                        <div className='row facility-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Форма собственности' id='ownership_type' onChange={handleChange} value={selectedFacility?.ownership_type} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Категория объекта' id='facility_category' onChange={handleChange} value={selectedFacility?.facility_category} />
                            </div>
                        </div>
                        <div className='row facility-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Вид охраны' id='security_type' onChange={handleChange} value={selectedFacility?.security_type} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='№ договорного дела' id='contruct_file_number' onChange={handleChange} value={selectedFacility?.contruct_file_number} />
                            </div>
                        </div>
                        <div className='row facility-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='№ литерного дела' id='lettered_file_number' onChange={handleChange} value={selectedFacility?.lettered_file_number} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='СПИ' id='spi' onChange={handleChange} value={selectedFacility?.spi} />
                            </div>
                        </div>
                        <div className='row facility-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Оборудование' id='facility_hardware' onChange={handleChange} value={selectedFacility?.facility_hardware} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Обслуживающая организация' id='surving_organization' onChange={handleChange} value={selectedFacility?.surving_organization} />
                            </div>
                        </div>
                        <div className='row facility-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Монтажная организация' id='mounting_organization' onChange={handleChange} value={selectedFacility?.mounting_organization} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Пультовый номер' id='pult_number' onChange={handleChange} value={selectedFacility?.pult_number} />
                            </div>
                        </div>
                        <div className='row facility-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Номер SIM-карты' id='sim_number' onChange={handleChange} value={selectedFacility?.sim_number} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Ответственное лицо' id='responsible' onChange={handleChange} value={selectedFacility?.responsible} />
                            </div>
                        </div>
                        <div className='row facility-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Подбор' id='assortment' onChange={handleChange} value={selectedFacility?.assortment} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Часы охраны' id='security_hours' onChange={handleChange} value={selectedFacility?.security_hours} />
                            </div>
                        </div>
                        <div className='row facility-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Год ввода в эксплуатацию' id='comm_year' onChange={handleChange} value={selectedFacility?.comm_year} />
                            </div>
                        </div>
                        <div className='facility-edit__buttons'>
                            <Button variant="secondary" onClick={handleCancel}>
                                Закрыть
                            </Button>
                            <Button variant="success" onClick={handleSave} style={{ marginLeft: '20px' }}>
                                Сохранить
                            </Button>
                        </div>
                    </div>
            }
        </div>
    );
});

export default FacilityEdit;