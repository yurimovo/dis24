import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { Facility } from '../../types/facilities';

import FacilityRow from "./facility-row/FacilityRow";
import NewFacility from "./new-facility/NewFacility";

import "./style.scss";

const Facilities = () => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleToggleModal = () => setShowModal(!showModal);

    const handleFacilitySave = () => {
        console.log('Facility saved...');
        setShowModal(false);
    };

    const handleFacilityCancel = () => {
        setShowModal(false);
    };

    return (
        <div className='container facilities'>
            <div className='row pageHeader'>
                Дислокация объектов
            </div>
            <div className='row tableHeader'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 headerItem'>№ п/п</div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 headerItem'>Организация</div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 headerItem'>Объект</div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 headerItem'>Адрес</div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 headerItem'>Действия</div>
            </div>
            <div className='row'>
                {
                    (facilitiesList || []).map((facility: Facility, idx) => (
                        <FacilityRow
                            facility={facility}
                            idx={idx+1}
                        />
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
            <Modal show={showModal} onHide={handleToggleModal} centered size='lg'>
                <Modal.Header className='modalHeader' closeButton>
                    <Modal.Title>Добавление объекта</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <div className='container'>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Организация' id='organization' />
                                <Form.Control className='textField' type='text' placeholder='Объект' id='facility' />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Адрес' id='address' />
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

export default Facilities;