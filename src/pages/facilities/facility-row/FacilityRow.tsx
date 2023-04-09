import React from 'react';

import { FacilityInList } from '../../../types/facilities';

import './style.scss';

import EditIcon from '../../../assetts/edit.png';
import DeleteIcon from '../../../assetts/delete.png';

interface IFacility {
    facility: FacilityInList;
    idx: number;
}

const FacilityRow: React.FC<IFacility> = ({ facility, idx }) => {
    return (
        <div className='container facilityRowContainer'>
            <div className='row facilityRow'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 rowElement'>
                    {idx}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {facility.organizations.organization_name}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {facility.facility_name}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {facility.facility_address}
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 rowElement actions'>
                    <img src={EditIcon} alt='Edit Icon' />
                    <img src={DeleteIcon} alt='Delete Icon' />
                </div>
            </div>
        </div>
    );
};

export default FacilityRow;