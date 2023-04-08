import React, { useState, useEffect } from 'react';
import { Accordion, Form } from 'react-bootstrap';
import axios from 'axios';
import { Organization } from '../../types/organizations';

import './style.scss';
import OrganizationRow from "./organization-row/OrganizationRow";
import {fetchOrganizations} from "../../service-functions/organizations/fetchOrganizations";

const Organizations = () => {
    const [organizations, setOrganizations] = useState<Array<Organization>>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    const getOrganizations = () => {
        setLoading(true);
            fetchOrganizations()
              .then(response => {
                console.log("Response", response);
                setOrganizations(response);
                setLoading(false);
              }).catch(error => {
                console.error(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getOrganizations();
    },[]);

    return (
        <div className='container organizationsContainer'>
            <div className='row'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                    <Form.Text className='organizationsHeader'>Организации</Form.Text>
                </div>
            </div>
            <div className='row'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                    <Accordion defaultActiveKey="0" className="accordion">
                        {organizations.map((organization: Organization, idx) => (
                            <OrganizationRow
                                organization={organization}
                                key={organization.uid}
                                idx={idx + 1}
                            />
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Organizations;