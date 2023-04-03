import React from 'react';

import { Facility } from '../../../types/facilities';

import './style.scss';

interface IFacility {
    facility: Facility;
    idx: number;
};

const FacilityRow: React.FC<IFacility> = ({facility, idx}) => {
    return (
        <div className='container facilityRowContainer'>
            <div className='row facilityRow'>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 rowElement'>
                    {idx}
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 rowElement'>
                    {facility.organization}
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 rowElement'>
                    {facility.facility}
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
                    {facility.address}
                </div>
            </div>
        </div>
    );
};

export default FacilityRow;