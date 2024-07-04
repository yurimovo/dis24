import { Apartment } from "../../types/apartments";

export const fetchEditApartmentById = async (id: number) => {
    try {
        const r = await fetch(`/api/apartments/apartment-edit-info/${id}`, {
            method: "GET",
            mode: "cors",
            credentials: "include",
        });
        if (!r.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await r.json();
        return data as Apartment;
    }   catch (e) {
        throw e;
    }
}; 