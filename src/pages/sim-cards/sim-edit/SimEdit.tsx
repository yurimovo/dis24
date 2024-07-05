import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import store from "../../../store";
import { observer } from "mobx-react";
import { Watch } from "react-loader-spinner";
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { fetchEditSimById } from '../../../service-functions/simcards/fetchEditSimById';
import { updateSim } from '../../../service-functions/simcards/updateSim';
import { Simcard } from "../../../types/simcards";

import './style.scss';
import 'react-toastify/dist/ReactToastify.css';


const SimEdit = observer(() => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { selectedEditingSim } = store;
    const [selectedSim, setSelectedSim] = useState<Simcard>({
        sim_number: '',    
        fccid: '',
        object: '',
        address: '',
        pult_number: '',
        mounting_date: ''
    });
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetchEditSimById(selectedEditingSim)
        .then((result) => {
            setSelectedSim(result);
            setLoading(false);
            console.log('selSim', selectedSim);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setSelectedSim({...selectedSim, [id]: value})
    }

    const handleCancel = () => {
        navigate('/simcards');
    };

    const handleSave = async () => {
        try {
            await updateSim(selectedSim, selectedEditingSim);
            await toast.success(`SIM-карта ${selectedSim.sim_number} изменена`, {
                onClose: () => navigate('/simcards')
            });
        } catch (error) {
            console.error(error);
            toast.error(`Ошибка обновления SIM-карты ${selectedSim.sim_number}`);
        };
    };

    return (
        <div className='container sim-edit'>
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
                <div className="sim-edit__content">
                    <div className="sim-edit__content__header">Редактирование SIM-карты</div>
                    <div className="sim-edit__content__sim">+7{ selectedSim?.sim_number }</div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='№ SIM-карты' id='sim_number' onChange={handleChange} value={selectedSim?.sim_number} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='FCCID' id='fccid' onChange={handleChange} value={selectedSim?.fccid} />
                            </div>
                        </div>
                        <div className='row sim-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Место установки' id='object' onChange={handleChange} value={selectedSim?.object} />
                            </div>
                        </div>
                        <div className='row sim-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Адрес' id='address' onChange={handleChange} value={selectedSim?.address} />
                            </div>
                        </div>
                        <div className='row sim-edit__content__row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Пультовый №' id='pult_number' onChange={handleChange} value={selectedSim?.pult_number} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Дата установки' id='mounting_date' onChange={handleChange} value={selectedSim?.mounting_date} />
                            </div>
                        </div>
                        <div className='sim-edit__buttons'>
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

export default SimEdit;