import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import { Watch } from 'react-loader-spinner';

import { ApartmentInList } from '../../types/apartments';

import ApartmentRow from "./apartment-row/ApartmentRow";

import "./style.scss";
import {fetchApartments} from "../../service-functions/apartments/fetchApartments";

const Apartments = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [apartments, setApartments] = useState<Array<ApartmentInList>>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleToggleModal = () => setShowModal(!showModal);

  const handleApartmentSave = () => {
    console.log('Apartment saved...');
    setShowModal(false);
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
    <div className='container apartments'>
      <div className='row pageHeader'>
        Дислокация МПХИГ
      </div>
      <div className='row'>
        <div className='col-xl-12 col-lg-12-col-md-12' style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Button variant='success' onClick={handleToggleModal}>
            Добавить МПХИГ
          </Button>
        </div>
      </div>
      <div className='row tableHeader'>
        <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1'>№ п/п</div>
        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>Собственник</div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>Адрес</div>
        <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2'>№ договора</div>
        <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2'>Действия</div>
      </div>
      {isLoading ? 
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
      />  :
      <div className='row'>
        {
          (apartments || []).map((apartment: ApartmentInList, idx) => (
            <ApartmentRow
              apartment={apartment}
              key={idx}
              idx={idx+1}
            />
          ))
        }
      </div>
    }
      <Modal show={showModal} onHide={handleToggleModal} centered size='lg'>
        <Modal.Header className='modalHeader' closeButton>
          <Modal.Title>Добавление МПХИГ</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
          <div className='container'>
            <div className='row justify-content-start align-items-start'>
              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                <Form.Control className='textField' type='text' placeholder='Собственник' id='owner' />
                <Form.Control className='textField' type='text' placeholder='Адрес' id='address' />
              </div>
              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                <Form.Control className='textField' type='text' placeholder='№ договора' id='contract_numbers' />
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
  );
};

export default Apartments;