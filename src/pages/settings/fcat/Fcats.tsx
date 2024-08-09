import React, { useEffect, useState } from "react";
import { fetchAllFcats } from "service-functions/fcats/fetchAllFcats";
import { createFcat } from "service-functions/fcats/createFcat";
import { Fcat, FcatInList } from "types/fcats";
import { Watch } from "react-loader-spinner";
import FcatRow from "./fcat-row/FcatRow";
import { toast } from "react-toastify";
import { useAuth } from "hooks/userAuth.hook";
import { Modal, Form, Button } from "react-bootstrap";
import Error403 from '../../../assetts/403.png';

import "./style.scss";

const Fcats = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [fcatsList, setFcatsList] = useState<Array<FcatInList>>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<Fcat>({
        category_name: ''
    });
    const { isAuth } = useAuth();

    const reloadPage = () => {
        window.location.reload();
    };

    const handleToggleModal = () => setShowModal(!showModal);

    const handleFcatSave = async (e: React.FormEvent) => {
        console.log('form data', formData);
        e.preventDefault();
        try {
            await createFcat(formData);
            toast.success('Категория добавлена', {
                onClose: () => {
                    fetchAllFcats().then((response) => {
                        setFcatsList(response);
                        setShowModal(false);
                    }).catch(error => {
                        console.error(error);
                    });
                }
            });
        } catch (error) {
            toast.error('Ошибка создания категории');
        }
    };

    const handleFcatCancel = () => {
        setShowModal(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({...formData, [id]: value})
    };

    useEffect(() => {
        setLoading(true);
        fetchAllFcats().then((response) => {
            setFcatsList(response);
            setLoading(false);
        }).catch(error => {
            console.error(error);
            setLoading(false);
        });
    },[]);

    return isAuth ? (
        <div className='container fcats'>
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
            {fcatsList.length === 0 ? 
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '50px', 
                    fontWeight: 500, 
                    fontSize: '32px', 
                    color: '#b5533e' 
                }}>Категории отсутствуют</div> : isLoading ? 
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
                        (fcatsList || []).map((fcat: FcatInList, idx, key) => (
                            <FcatRow
                                fcat={fcat}
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
                    <Modal.Title>Добавление категории объекта</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <div className='container'>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Наименование' id='category_name' onChange={handleChange} value={formData.category_name} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='modalFooter'>
                    <Button variant="secondary" onClick={handleFcatCancel}>
                        Закрыть
                    </Button>
                    <Button variant="success" onClick={handleFcatSave}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    ) : (
        <div className='container fcats' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={Error403} alt='Доступ запрещен' style={{ width: '400px', height: 'auto' }} />
        </div>
    );
};

export default Fcats;