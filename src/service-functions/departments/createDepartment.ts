import { Department } from "../../types/departments";

export const createDepartment = async (data: Department) => {
    const departmentData = JSON.stringify(data)
    try {
        await fetch('/api/departments/department-add', {
            method: 'POST',
            body: departmentData,
            headers: {
                'Content-Type': 'application/json'
        }});
    } catch (error) {
        throw error;
    }
};