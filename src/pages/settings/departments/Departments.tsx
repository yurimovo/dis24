import React, { useEffect, useState } from "react";
import { fetchAllDepartments } from "service-functions/departments/fetchAllDepartments";
import { createDepartment } from "service-functions/departments/createDepartment";
import { Department, DepartmentInList } from "types/departments";
import { Watch } from "react-loader-spinner";
import DepartmentRow from "./department-row/DepartmentRow";
import { toast } from "react-toastify";
import { useAuth } from "hooks/userAuth.hook";
import { Modal, Form, Button } from "react-bootstrap";
import Error403 from '../../../assetts/403.png';

import "./style.scss";

const Departments = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [departmentList, setDepartmentList] = useState<Array<DepartmentInList>>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<Department>({
        short_name: '',
        full_name: '',
        legal_address: '',
        actual_address: '',
        inn: '',
        company_director: ''
    });
    const { isAuth } = useAuth();

    const reloadPage = () => {
        window.location.reload();
    };

    const handleToggleModal = () => setShowModal(!showModal);

    const handleDepartmentSave = async (e: React.FormEvent) => {
        console.log('form data', formData);
        e.preventDefault();
        try {
            await createDepartment(formData);
            toast.success('Подразделение добавлено', {
                onClose: () => {
                    fetchAllDepartments().then((response) => {
                        setDepartmentList(response);
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

    const handleDepartmentCancel = () => {
        setShowModal(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({...formData, [id]: value})
    };

    useEffect(() => {
        setLoading(true);
        fetchAllDepartments().then((response) => {
            setDepartmentList(response);
            setLoading(false);
        }).catch(error => {
            console.error(error);
            setLoading(false);
        });
    },[]);

    return isAuth ? (
        <div className='container departments'>
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
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>Наименование</div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2'>ИНН</div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>ФИО руководителя</div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2'>Действия</div>
            </div>
            {departmentList.length === 0 ? 
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '50px', 
                    fontWeight: 500, 
                    fontSize: '32px', 
                    color: '#b5533e' 
                }}>Подразделения отсутствуют</div> : isLoading ? 
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
                        (departmentList || []).map((dep: DepartmentInList, idx, key) => (
                            <DepartmentRow
                                dep={dep}
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
                    <Modal.Title>Добавление подразделения</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <div className='container'>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Краткое наименование' id='short_name' onChange={handleChange} value={formData.short_name} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Полное наименование' id='full_name' onChange={handleChange} value={formData.full_name} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                                <Form.Control className='textField' type='text' placeholder='Юридический адрес' id='legal_address' onChange={handleChange} value={formData.legal_address} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Фактический адрес' id='actual_address' onChange={handleChange} value={formData.actual_address} />
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='ИНН' id='inn' onChange={handleChange} value={formData.inn} />
                            </div>
                        </div>
                        <div className='row justify-content-start align-items-start'>
                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                                <Form.Control className='textField' type='text' placeholder='Руководитель подразделения' id='company_director' onChange={handleChange} value={formData.company_director} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='modalFooter'>
                    <Button variant="secondary" onClick={handleDepartmentCancel}>
                        Закрыть
                    </Button>
                    <Button variant="success" onClick={handleDepartmentSave}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    ) : (
        <div className='container departments' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={Error403} alt='Доступ запрещен' style={{ width: '400px', height: 'auto' }} />
        </div>
    );
};

export default Departments;