import React, { useState, useEffect } from 'react';
import {Organization} from "../../../types/organizations";
import {Accordion} from "react-bootstrap";
import {fetchFacilities} from "../../../service-functions/facilities/fetchFacilities";
import {Facility} from "../../../types/facilities";
import axios from "axios";
import organizations from "../Organizations";
import Facilities from "../../facilities/Facilities";

interface IOrganizationRow {
    organization: Organization;
    idx: number;
}

const OrganizationRow: React.FC<IOrganizationRow> = ({ organization, idx }) => {
  const [facilies, setFacilities] = useState<Array<Facility>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getOrganizationFacilities = () => {
    setLoading(true);
    axios.get('/api/facilities/facility_list')
      .then(res => {
        const facilities = res.data;
        setFacilities(facilities);
      }).then(() => {
        setLoading(false);
      }).catch(e => {
        console.log(e);
        setLoading(false);
      });
  }

  useEffect(() => {
    getOrganizationFacilities();
  }, [organization.uid])

  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>{ organization.organizationName }</Accordion.Header>
      <Accordion.Body>
        <Facilities facilities={facilies} />
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default OrganizationRow;