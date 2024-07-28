import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import { Watch } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Apartment, ApartmentInList } from '../../types/apartments';

import { auth } from '../../firebase';
import ApartmentRow from "./apartment-row/ApartmentRow";
import ApartmentDislocation from './apartment-dislocation/ApartmentDislocation';

import { fetchApartments } from "../../service-functions/apartments/fetchApartments";
import { createApartment } from '../../service-functions/apartments/createApartment';

import { useAuth } from 'hooks/userAuth.hook';

import Error403 from '../../assetts/403.png';
import "./style.scss";

const Apartments = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [apartments, setApartments] = useState<Array<ApartmentInList>>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<Apartment>({
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

  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();

  const { isAuth, email } = useAuth();

  if (token) {
    auth.signInWithCustomToken(token)
      .then((userCredential) => {
        setIsAuthenticated(true);
        console.log("User signed in with token:", userCredential.user);
      })
      .catch((error) => {
        console.error("Error signing in with token:", error);
        navigate('/auth');
      });
  } else {
    // Токен отсутствует, перенаправление на страницу входа
    navigate('/auth');
  }

  const handleToggleModal = () => setShowModal(!showModal);

  const reloadPage = () => {
    window.location.reload();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({...formData, [id]: value})
  };

  const handleApartmentSave = async (e: React.FormEvent) => {
    console.log('form data', formData);
        e.preventDefault();
        try {
            await createApartment(formData);
            toast.success('МПХИГ создан', {
                onClose: () => {
                    fetchApartments().then((response) => {
                        setApartments(response);
                        setShowModal(false);
                    }).catch(error => {
                        console.error(error);
                    });
                }
            });
        } catch (error) {
            toast.error('Ошибка создания МПХИГ');
        }
  };

  const handleApartmentCancel = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchApartments()
      .then((result) => {
        setApartments(result);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  },[]);

  return (
    !isAuth ? (
      <div className='container apartments'>
        <img src={Error403} alt='Доступ запрещен' />
      </div>
    ) : (
      <div className='container apartments'>
        <div className='row pageHeader'>
          Дислокация МПХИГ
        </div>
        <div className='row'>
          <div className='col-xl-12 col-lg-12 col-md-12' style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <Button variant='success' onClick={handleToggleModal}>
              Добавить
            </Button>
          </div>
          <div className='col-xl-12 col-lg-12 col-md-12'>
            <ApartmentDislocation />
          </div>
        </div>
        <div className='row tableHeader'>
          <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1'>№ п/п</div>
          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>Собственник</div>
          <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>Адрес</div>
          <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2'>№ договора</div>
          <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2'>Действия</div>
        </div>
        {isLoading ? (
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
          />
        ) : (
          <div className='row'>
            {(apartments || []).map((apartment, idx) => (
              <ApartmentRow
                apartment={apartment}
                key={idx}
                idx={idx + 1}
                reloadPage={reloadPage}
              />
            ))}
          </div>
        )}
        <Modal show={showModal} onHide={handleToggleModal} centered size='lg'>
          <Modal.Header className='modalHeader' closeButton>
            <Modal.Title>Добавление МПХИГ</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalBody'>
            <div className='container'>
              <div className='row justify-content-start align-items-start'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                  <Form.Control className='textField' type='text' placeholder='Собственник' id='owner' onChange={handleChange} value={formData.owner} />
                </div>
              </div>
              <div className='row justify-content-start align-items-start'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                  <Form.Control className='textField' type='text' placeholder='Адрес' id='address' onChange={handleChange} value={formData.address} />
                </div>
              </div>
              <div className='row justify-content-start align-items-start'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                  <Form.Control className='textField' type='text' placeholder='Телефоны' id='phones' onChange={handleChange} value={formData.phones} />
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
                  <Form.Control className='textField' type='text' placeholder='Категория МПХИГ' id='apartment_category' onChange={handleChange} value={formData.apartment_category} />
                </div>
              </div>
              <div className='row justify-content-start align-items-start'>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                  <Form.Control className='textField' type='text' placeholder='№ пенала' id='penal_number' onChange={handleChange} value={formData.penal_number} />
                </div>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                  <Form.Control className='textField' type='text' placeholder='Пультовый номер' id='pult_number' onChange={handleChange} value={formData.pult_number} />
                </div>
              </div>
              <div className='row justify-content-start align-items-start'>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                  <Form.Control className='textField' type='text' placeholder='СПИ' id='spi' onChange={handleChange} value={formData.spi} />
                </div>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                  <Form.Control className='textField' type='text' placeholder='Оборудование' id='apartment_hardware' onChange={handleChange} value={formData.apartment_hardware} />
                </div>
              </div>
              <div className='row justify-content-start align-items-start'>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                  <Form.Control className='textField' type='text' placeholder='Монтажная организация' id='mounting_organization' onChange={handleChange} value={formData.mounting_organization} />
                </div>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                  <Form.Control className='textField' type='text' placeholder='Обслуживающая организация' id='surving_organization' onChange={handleChange} value={formData.surving_organization} />
                </div>
              </div>
              <div className='row justify-content-start align-items-start'>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                  <Form.Control className='textField' type='text' placeholder='Подбор' id='assortment' onChange={handleChange} value={formData.assortment} />
                </div>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                  <Form.Control className='textField' type='text' placeholder='ИНН' id='inn' onChange={handleChange} value={formData.inn} />
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
            <Button variant="secondary" onClick={handleApartmentCancel}>
              Закрыть
            </Button>
            <Button variant="success" onClick={handleApartmentSave}>
              Сохранить
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  );
  
};

export default Apartments;