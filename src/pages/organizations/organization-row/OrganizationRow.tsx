import React from 'react';
import { OrganizationInList } from "../../../types/organizations";
import EditIcon from "../../../assetts/edit.png";
import DeleteIcon from "../../../assetts/delete.png";

import "./style.scss";

interface IOrganizationRow {
  organization: OrganizationInList;
  idx: number;
}

const OrganizationRow: React.FC<IOrganizationRow> = ({ organization, idx }) => {
  return (
    <div className='container organizationRowContainer'>
      <div className='row organizationRow'>
        <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 rowElement'>
          {idx}
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
          {organization.organization_name}
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
          {organization.legal_address}
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
          {organization.inn}
        </div>
        <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 rowElement actions'>
          <img src={EditIcon} alt='Edit Icon' />
          <img src={DeleteIcon} alt='Delete Icon' />
        </div>
      </div>
    </div>
  )
}

export default OrganizationRow;