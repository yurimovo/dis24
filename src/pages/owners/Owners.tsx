import React, {useEffect, useState} from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import { OwnersInList } from "../../types/owners";
import OwnerRow from "./owner-row/OwnerRow";
import {fetchOwners} from "../../service-functions/owners/fetchOwners";

import "./style.scss";

const Owners = () => {
  const [owners, setOwners] = useState<Array<OwnersInList>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleToggleModal = () => setShowModal(!showModal);

  const handleFacilitySave = () => {
    console.log('Owner saved...');
    setShowModal(false);
  };

  const handleFacilityCancel = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchOwners()
      .then((result) => {
        setOwners(result);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  },[]);

  return (
    <div className='container ownersContainer'>
      <div className='row pageHeader'>
        Список собственников
      </div>
      <div className='row tableHeader'>
        <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1'>№ п/п</div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>Cобственник</div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>Адрес</div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>ИНН</div>
        <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2'>Действия</div>
      </div>
      <div className='row'>
        {
          (owners || []).map((owner: OwnersInList, idx) => (
            <OwnerRow owner={owner} key={idx} idx={idx+1} />
          ))
        }
      </div>
      <div className='row'>
        <div className='col-xl-12 col-lg-12-col-md-12'>
          <Button variant='success' onClick={handleToggleModal} style={{marginTop: '20px'}}>
            Добавить
          </Button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleToggleModal} centered size='sm'>
        <Modal.Header className='modalHeader' closeButton>
          <Modal.Title>Новый собственник</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
          <div className='container'>
            <div className='row justify-content-start align-items-start'>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                <Form.Control className='textField' type='text' placeholder='ФИО собственника' id='owner' />
                <Form.Control className='textField' type='text' placeholder='Адрес прописки' id='legal_address' />
                <Form.Control className='textField' type='text' placeholder='ИНН' id='inn' />
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
  );
};

export default Owners;