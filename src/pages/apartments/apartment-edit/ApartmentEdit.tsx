import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import store from "../../../store";
import { observer } from "mobx-react";
import { Watch } from "react-loader-spinner";
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { fetchEditApartmentById } from '../../../service-functions/apartments/fetchEditApartmentById';
import { updateApartment } from '../../../service-functions/apartments/updateApartment';
import { Apartment } from "../../../types/apartments";

import './style.scss';
import 'react-toastify/dist/ReactToastify.css';


const ApartmentEdit = observer(() => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { selectedEditingApartment } = store;
    const [selectedApartment, setSelectedApartment] = useState<Apartment>({
        owner: '', 
        address: '', 
        phones: '', 
        inn: '', 
        contruct_number: '', 
        contruct_date: '', 
        price: '', 
        price_date: '', 
        security_type: '', 
        contruct_file_number: '',
        lettered_file_number: '', 
        apartment_category: '', 
        penal_number: '', 
        pult_number: '', 
        spi: '', 
        apartment_hardware: '', 
        mounting_organization: '',
        surving_organization: '', 
        assortment: '',
        comm_year: ''
    });
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        console.log(selectedEditingApartment)
        fetchEditApartmentById(selectedEditingApartment)
        .then((result) => {
            setSelectedApartment(result);
            setLoading(false);
            console.log('selApart', selectedApartment);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setSelectedApartment({...selectedApartment, [id]: value})
    }

    const handleCancel = () => {
        navigate('/apartments');
    };

    const handleSave = async () => {
        try {
            await updateApartment(selectedApartment, selectedEditingApartment);
            await toast.success(`МПХИГ ${selectedApartment.owner} изменен`, {
                onClose: () => navigate('/apartments')
            });
        } catch (error) {
            console.error(error);
            toast.error(`Ошибка обновления МПХИГ ${selectedApartment.owner}`);
        };
    };

    return (
        <div className='container apartment-edit'>
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
                <div className="apartment-edit__content">
                    <div className="apartment-edit__content__header">Редактирование МПХИГ</div>
                    <div className="apartment-edit__content__apartment">{ selectedApartment?.owner }</div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Собственник' id='owner' onChange={handleChange} value={selectedApartment?.owner} />
                            </div>
                        </div>
                        <div className='row apartment-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                            <Form.Control className='textField' type='text' placeholder='Адрес' id='address' onChange={handleChange} value={selectedApartment?.address} />
                            </div>
                        </div>
                        <div className='row apartment-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Телефоны' id='phones' onChange={handleChange} value={selectedApartment?.phones} />
                            </div>
                        </div>
                        <div className='row apartment-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='№ договора' id='contruct_number' onChange={handleChange} value={selectedApartment?.contruct_number} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Дата договора' id='contruct_date' onChange={handleChange} value={selectedApartment?.contruct_date} />
                            </div>
                        </div>
                        <div className='row apartment-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Тариф в месяц' id='price' onChange={handleChange} value={selectedApartment?.price} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Дата тарифа' id='price_date' onChange={handleChange} value={selectedApartment?.price_date} />
                            </div>
                        </div>
                        <div className='row apartment-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='ИНН' id='inn' onChange={handleChange} value={selectedApartment?.inn} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Вид охраны' id='security_type' onChange={handleChange} value={selectedApartment?.security_type} />
                            </div>
                        </div>
                        <div className='row apartment-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='№ договорного дела' id='contruct_file_number' onChange={handleChange} value={selectedApartment?.contruct_file_number} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='№ литерного дела' id='lettered_file_number' onChange={handleChange} value={selectedApartment?.lettered_file_number} />
                            </div>
                        </div>
                        <div className='row apartment-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Категория МПХИГ' id='apartment_category' onChange={handleChange} value={selectedApartment?.apartment_category} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='№ пенала' id='penal_number' onChange={handleChange} value={selectedApartment?.penal_number} />
                            </div>
                        </div>
                        <div className='row apartment-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Пультовый номер' id='pult_number' onChange={handleChange} value={selectedApartment?.pult_number} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='СПИ' id='spi' onChange={handleChange} value={selectedApartment?.spi} />
                            </div>
                        </div>
                        <div className='row apartment-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Оборудование' id='apartment_hardware' onChange={handleChange} value={selectedApartment?.apartment_hardware} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Монтажная организация' id='mounting_organization' onChange={handleChange} value={selectedApartment?.mounting_organization} />
                            </div>
                        </div>
                        <div className='row apartment-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Обслуживающая организация' id='surving_organization' onChange={handleChange} value={selectedApartment?.surving_organization} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Подбор' id='assortment' onChange={handleChange} value={selectedApartment?.assortment} />
                            </div>
                        </div>
                        <div className='row apartment-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Год ввода в эксплуатацию' id='comm_year' onChange={handleChange} value={selectedApartment?.comm_year} />
                            </div>
                        </div>
                        <div className='apartment-edit__buttons'>
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

export default ApartmentEdit;