import { Facility } from "../../types/facilities";

export const updateFacility = async (data: Facility, id: number) => {
    const updatedFacilityData = JSON.stringify(data)
    try {
        await fetch(`/api/facilities/facility-update/${id}`, {
            method: 'PUT',
            body: updatedFacilityData,
            headers: {
                'Content-Type': 'application/json'
        }});
    } catch (error) {
        throw error;
    }
};