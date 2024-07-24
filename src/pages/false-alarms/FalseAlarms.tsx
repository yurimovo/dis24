import React from "react";

import './style.scss';

import AlarmRow from "./alarm-row/AlarmRow";

const FalseAlarms = () => {
    return (
        <div className="false-alarms">
            <AlarmRow />
        </div>
    );
};

export default FalseAlarms;