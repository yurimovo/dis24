import { Apartment } from "../../types/apartments";

export const createApartment = async (data: Apartment) => {
    const apartmentData = JSON.stringify(data)
    try {
        await fetch('/api/apartments/apartment-add', {
            method: 'POST',
            body: apartmentData,
            headers: {
                'Content-Type': 'application/json'
        }});
    } catch (error) {
        throw error;
    }
};