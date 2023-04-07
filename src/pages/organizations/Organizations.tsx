import React, { useState, useEffect } from 'react';
import { Accordion, Form } from 'react-bootstrap';
import axios from 'axios';
import { Organization } from '../../types/organizations';

const Organizations = () => {
    const [organizations, setOrganizations] = useState<Array<Organization>>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    const fetchOrganizations = () => {
        setLoading(true);
        try {
            axios.get('/api/organizations/organizations_list')
                .then(res => {
                    setOrganizations(res.data);
                });
        } catch (e) {
            throw e;
        }
        setLoading(false);
    }

    return (
        <div className='container organizationsContainer'>
            <div className='row'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                    <Form.Text className='organizationsHeader'>Организации</Form.Text>
                </div>
            </div>
            <div className='row'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Organizations;