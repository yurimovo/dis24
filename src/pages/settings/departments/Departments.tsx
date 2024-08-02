import React from "react";

import DepartmentRow from "./department-row/DepartmentRow";
import "./style.scss";

const Departments = () => {
    return (
        <div className="departments">
            <div className="departments__content">
                Departments
                <DepartmentRow />
                <DepartmentRow />
                <DepartmentRow />
            </div>
        </div>
    );
};

export default Departments;