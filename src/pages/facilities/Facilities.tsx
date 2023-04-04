import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import { Facility } from '../../types/facilities';

import FacilityRow from "./facility-row/FacilityRow";
import NewFacility from "./new-facility/NewFacility";

import "./style.scss";

const Facilities = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleToggleModal = () => setShowModal(!showModal);

    const facilitiesList = [
        {
            uid: 111,
            organization: 'и.п. Иванов И.И.',
            facility: 'маг. и.п. Иванова И.И.',
            address: 'г. Калачинск, ул. Ленина, д. 37',
        },
        {
            uid: 222,
            organization: 'и.п. Петров П.П.',
            facility: 'маг. и.п. Петрова П.П.',
            address: 'г. Калачинск, ул. Ленина, д. 42',
        },
        {
            uid: 333,
            organization: 'и.п. Сидоров С.С.',
            facility: 'маг. и.п. Сидорова С.С.',
            address: 'г. Калачинск, ул. Ленина, д. 16',
        },
    ]

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
            <>
                <Modal show={showModal} onHide={handleToggleModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Добавление объекта</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Организация</p>
                        <p>Объект</p>
                        <p>Адрес</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleToggleModal}>
                            Закрыть
                        </Button>
                        <Button variant="primary" onClick={handleToggleModal}>
                            Сохранить
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default Facilities;