import { Facility } from "../../types/facilities";

export const fetchFacilityById = async (id: number) => {
    try {
        const r = await fetch(`/api/facilities/facility-info/${id}`, {
            method: "GET",
            mode: "cors",
            credentials: "include",
        });
        if (!r.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await r.json();
        return data as Facility;
    }   catch (e) {
        throw e;
    }
};