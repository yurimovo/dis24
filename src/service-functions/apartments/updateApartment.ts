import { Apartment } from "../../types/apartments";

export const updateApartment = async (data: Apartment, id: number) => {
    const updatedApartmentData = JSON.stringify(data)
    try {
        await fetch(`/api/apartments/apartment-update/${id}`, {
            method: 'PUT',
            body: updatedApartmentData,
            headers: {
                'Content-Type': 'application/json'
        }});
    } catch (error) {
        throw error;
    }
};