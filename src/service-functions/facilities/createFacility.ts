import { Facility } from "../../types/facilities";

export const createFacility = async (data: Facility) => {
    const facilityData = JSON.stringify(data)
    try {
        await fetch('/api/facilities/facility_add', {
            method: 'POST',
            body: facilityData
        });
    } catch (error) {
        throw error;
    }
};