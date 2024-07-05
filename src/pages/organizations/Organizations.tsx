import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {SubmitHandler, useForm} from "react-hook-form";
import { Organization, OrganizationInList } from '../../types/organizations';

import OrganizationRow from "./organization-row/OrganizationRow";
import { fetchOrganizations } from "../../service-functions/organizations/fetchOrganizations";
import { createOrganization } from "../../service-functions/organizations/createOrganization";

import './style.scss';

import Construct from '../../assetts/construction.png';

const Organizations = () => {
  /* const [organizations, setOrganizations] = useState<Array<OrganizationInList>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [organizationData, setOrganizationData] = useState<Organization>({
    organization_name: '',
    legal_address: '',
    inn: '',
    ogrn: ''
  }); */

  /* const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset
  } = useForm<Organization>({
    mode: "onBlur",
    defaultValues: {
      organization_name: '',
      legal_address: '',
      inn: '',
      ogrn: ''
    }
  }); */

  /* const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganizationData({...organizationData, [event.target.name]: event.target.value });
  };

  const handleSaveOrganization = () => {
    setLoading(true);
    createOrganization({
      organization_name: organizationData.organization_name,
      legal_address: organizationData.legal_address,
      inn: organizationData.inn,
      ogrn: organizationData.ogrn
    })
      .then(() => {
        setLoading(false);
        setShowModal(false);
        fetchOrganizations()
          .then((res) => {
            setOrganizations(res);
          })
            .catch(error => {console.error(error)});
      })
      .catch((error) => console.error(error));
  };

  const handleToggleModal = () => setShowModal(!showModal);

  const handleGetOrganizations = () => {
    setLoading(true);
    fetchOrganizations()
      .then(result => {
        setOrganizations(result);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    handleGetOrganizations();
  },[]); */

  return (
    <div className='container organizationsContainer'>
      <img src={Construct} alt='Construction' style={{
        width: '40%', 
        height: 'auto', 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '100px'
        }}
      />
        {/* <div className='row pageHeader'>
          Список организаций
        </div>
        <div className='row tableHeader'>
          <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1'>№ п/п</div>
          <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>Организация</div>
          <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>Объект</div>
          <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>Адрес</div>
          <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2'>Действия</div>
        </div>
      <div className='row'>
        {
          (organizations || []).map((organization: OrganizationInList, idx) => (
            <OrganizationRow
              organization={organization}
              key={idx}
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
      <Modal show={showModal} onHide={handleToggleModal} centered size='sm'>
        <Modal.Header className='modalHeader' closeButton>
          <Modal.Title className='modalTitle'>Новая организация</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
          <div className='container'>
            <div className='row justify-content-start align-items-start'>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                <form>
                  <input
                    className='modalInput'
                    type='text'
                    placeholder='Организация'
                    name='organization_name'
                    value={organizationData.organization_name}
                    onChange={handleChange}
                  />
                  <input
                    className='modalInput'
                    type='text'
                    placeholder='Юридический адрес'
                    name='legal_address'
                    value={organizationData.legal_address}
                    onChange={handleChange}
                  />
                  <input
                    className='modalInput'
                    type='text'
                    placeholder='ИНН'
                    name='inn'
                    value={organizationData.inn}
                    onChange={handleChange}
                  />
                  <input
                    className='modalInput'
                    type='text'
                    placeholder='ОГРН'
                    name='ogrn'
                    value={organizationData.ogrn}
                    onChange={handleChange}
                  />
                  <Button variant='success' onClick={handleSaveOrganization}>Сохранить</Button>
                </form>  
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </div>
  )
}

export default Organizations;