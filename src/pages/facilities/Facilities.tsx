import React from 'react';

import FacilityRow from "./facility-row/FacilityRow";
import NewFacility from "./new-facility/NewFacility";

const Facilities = () => {
    return (
        <div>
            <FacilityRow />
            <NewFacility />
        </div>
    );
};

export default Facilities;