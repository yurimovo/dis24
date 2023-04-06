import { Facility } from "../../types/facilities";

export const createFacility = async (organizationId: number, data: Facility) => {
    const facilityData = JSON.stringify(data)
    try {
        await fetch('/api/facilities/facility_add', {
            method: 'POST',
            body: facilityData
        });
        console.log(data);
    } catch (error) {
        throw error;
    }
};