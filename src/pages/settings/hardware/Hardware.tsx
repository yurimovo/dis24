import React, { useEffect, useState } from "react";
import { fetchAllHardware } from "service-functions/hardware/fetchAllHardware";
import { createHardware } from "service-functions/hardware/createHardware";
import { Hardware, HardwareInList } from "types/hardware";
import { Watch } from "react-loader-spinner";
import HardwareRow from "./hardware-row/HardwareRow";
import { toast } from "react-toastify";
import { useAuth } from "hooks/userAuth.hook";
import { Modal, Form, Button } from "react-bootstrap";
import Error403 from '../../../assetts/403.png';

import "./style.scss";

const Hardware = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [hardwareList, setHardwareList] = useState<Array<HardwareInList>>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<Hardware>({
        hardware_name: ''
    });
    const { isAuth } = useAuth();

    const reloadPage = () => {
        window.location.reload();
    };

    const handleToggleModal = () => setShowModal(!showModal);

    const handleHardwareSave = async (e: React.FormEvent) => {
        console.log('form data', formData);
        e.preventDefault();
        try {
            await createHardware(formData);
            toast.success('Оборудование добавлено', {
                onClose: () => {
                    fetchAllHardware().then((response) => {
                        setHardwareList(response);
                        setShowModal(false);
                    }).catch(error => {
                        console.error(error);
                    });
                }
            });
        } catch (error) {
            toast.error('Ошибка создания подразделения');
        }
    };

    const handleHardwareCancel = () => {
        setShowModal(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({...formData, [id]: value})
    };

    useEffect(() => {
        setLoading(true);
        fetchAllHardware().then((response) => {
            setHardwareList(response);
            setLoading(false);
        }).catch(error => {
            console.error(error);
            setLoading(false);
        });
    },[]);

    return isAuth ? (
        <div className='container hardware'>
            <div className='row'>
                <div className='col-xl-12 col-lg-12-col-md-12' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                    <Button variant='success' onClick={handleToggleModal}>
                        Добавить
                    </Button>
                    {/* <Button variant='primary' onClick={handlePDF} style={{marginLeft: '10px'}}>Экспорт в PDF</Button> */}
                </div>
            </div>
            <div className='row tableHeader'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1'>№ п/п</div>
                <div className='col-xxl-9 col-xl-9 col-lg-9 col-md-9'>Наименование</div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2'>Действия</div>
            </div>
            {hardwareList.length === 0 ? 
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '50px', 
                    fontWeight: 500, 
                    fontSize: '32px', 
                    color: '#b5533e' 
                }}>Оборудование отсутствует</div> : isLoading ? 
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
                        (hardwareList || []).map((hardware: HardwareInList, idx, key) => (
                            <HardwareRow
                                hardware={hardware}
                                idx={idx+1}
                                key={idx}
                                reloadPage={reloadPage}
                            />
                        ))
                    }
                </div>
            }
            <Modal show={showModal} onHide={handleToggleModal} centered size='lg'>
                <Modal.Header className='modalHeader' closeButton>
                    <Modal.Title>Добавление оборудования</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <div className='container'>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Наименование' id='hardware_name' onChange={handleChange} value={formData.hardware_name} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='modalFooter'>
                    <Button variant="secondary" onClick={handleHardwareCancel}>
                        Закрыть
                    </Button>
                    <Button variant="success" onClick={handleHardwareSave}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    ) : (
        <div className='container hardware' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={Error403} alt='Доступ запрещен' style={{ width: '400px', height: 'auto' }} />
        </div>
    );
};

export default Hardware;