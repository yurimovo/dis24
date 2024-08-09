import React, { useEffect, useState } from "react";
import { fetchAllSectypes } from "service-functions/sectypes/fetchAllSectypes";
import { createSectype } from "service-functions/sectypes/createSectype";
import { Sectype, SectypeInList } from "types/sectypes";
import { Watch } from "react-loader-spinner";
import SectypeRow from "./sectype-row/SectypeRow";
import { toast } from "react-toastify";
import { useAuth } from "hooks/userAuth.hook";
import { Modal, Form, Button } from "react-bootstrap";
import Error403 from '../../../assetts/403.png';

import "./style.scss";

const Sectypes = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [sectypeList, setSectypeList] = useState<Array<SectypeInList>>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<Sectype>({
        type_name: ''
    });
    const { isAuth } = useAuth();

    const reloadPage = () => {
        window.location.reload();
    };

    const handleToggleModal = () => setShowModal(!showModal);

    const handleSectypeSave = async (e: React.FormEvent) => {
        console.log('form data', formData);
        e.preventDefault();
        try {
            await createSectype(formData);
            toast.success('Вид охраны добавлен', {
                onClose: () => {
                    fetchAllSectypes().then((response) => {
                        setSectypeList(response);
                        setShowModal(false);
                    }).catch(error => {
                        console.error(error);
                    });
                }
            });
        } catch (error) {
            toast.error('Ошибка создания вида охраны');
        }
    };

    const handleSectypeCancel = () => {
        setShowModal(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({...formData, [id]: value})
    };

    useEffect(() => {
        setLoading(true);
        fetchAllSectypes().then((response) => {
            setSectypeList(response);
            setLoading(false);
        }).catch(error => {
            console.error(error);
            setLoading(false);
        });
    },[]);

    return isAuth ? (
        <div className='container sectypes'>
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
            {sectypeList.length === 0 ? 
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '50px', 
                    fontWeight: 500, 
                    fontSize: '32px', 
                    color: '#b5533e' 
                }}>Виды охраны отсутствуют</div> : isLoading ? 
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
                        (sectypeList || []).map((sectype: SectypeInList, idx, key) => (
                            <SectypeRow
                                sectype={sectype}
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
                    <Modal.Title>Добавление вида охраны</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <div className='container'>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Наименование' id='sectype_name' onChange={handleChange} value={formData.type_name} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='modalFooter'>
                    <Button variant="secondary" onClick={handleSectypeCancel}>
                        Закрыть
                    </Button>
                    <Button variant="success" onClick={handleSectypeSave}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    ) : (
        <div className='container sectypes' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={Error403} alt='Доступ запрещен' style={{ width: '400px', height: 'auto' }} />
        </div>
    );
};

export default Sectypes;