import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import {SubmitHandler, useForm} from "react-hook-form";
import { Organization, OrganizationInList } from '../../types/organizations';

import OrganizationRow from "./organization-row/OrganizationRow";
import { fetchOrganizations } from "../../service-functions/organizations/fetchOrganizations";
import { createOrganization } from "../../service-functions/organizations/createOrganization";

import './style.scss';

const Organizations = () => {
  const [organizations, setOrganizations] = useState<Array<OrganizationInList>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const {
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
  });

  const handleToggleModal = () => setShowModal(!showModal);

  const onSubmit: SubmitHandler<Organization> = (data) => {
    setLoading(true);
    createOrganization({
      organization_name: data.organization_name,
      legal_address: data.legal_address,
      inn: data.inn,
      ogrn: data.inn
    })
      .then(() => {
        handleGetOrganizations();
        setLoading(false);
      })
      .catch(error => console.error(error));
    reset();
  };

  const handleFacilityCancel = () => {
    setShowModal(false);
  };

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
  },[organizations]);

  return (
      <div className='container organizationsContainer'>
          <div className='row pageHeader'>
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      placeholder='Наименование организации'
                      {...register('organization_name', {
                        required: 'Обязательное поле',
                      })}
                    />
                    {
                      <div style={{ height: 30 }}>
                        {errors?.organization_name && <p style={{ color: 'red' }}>{errors.organization_name.message}</p>}
                      </div>
                    }
                    <input
                      placeholder='Юридический адрес'
                      {...register('legal_address', {
                        required: 'Обязательное поле'
                      })}
                    />
                    {
                      <div style={{ height: 30 }}>
                        {errors?.legal_address && <p style={{ color: 'red' }}>{errors.legal_address.message}</p>}
                      </div>
                    }
                    <input
                      placeholder='ИНН'
                      {...register('inn', {
                        required: 'Обязательное поле',
                        maxLength: 10,
                        minLength: 10,
                        pattern: {
                          value: /^\d+$/,
                          message: 'Допускаются только цифры'
                        }
                      })}
                    />
                    {
                      <div style={{ height: 30 }}>
                        {errors?.inn && <p style={{ color: 'red' }}>{errors.inn.message}</p>}
                      </div>
                    }
                    <input
                      placeholder='ОГРН'
                      {...register('ogrn', {
                        required: 'Обязательное поле',
                        maxLength: 13,
                        minLength: 13,
                        pattern: {
                          value: /^\d+$/,
                          message: 'Допускаются только цифры'
                        }
                      })}
                    />
                    {
                      <div style={{ height: 30 }}>
                        {errors?.ogrn && <p style={{ color: 'red' }}>{errors.ogrn.message}</p>}
                      </div>
                    }
                    <input className='saveButton' type='submit' value='Сохранить' />
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
  )
}

export default Organizations;