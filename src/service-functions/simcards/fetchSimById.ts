import { Simcard } from "../../types/simcards";

export const fetchSimById = async (id: number) => {
    try {
        const r = await fetch(`/api/simcards/sim-info/${id}`, {
            method: "GET",
            mode: "cors",
            credentials: "include",
        });
        if (!r.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await r.json();
        return data as Simcard;
    }   catch (e) {
        throw e;
    }
};