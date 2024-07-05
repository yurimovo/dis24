import { Simcard } from "../../types/simcards";

export const updateSim = async (data: Simcard, id: number) => {
    const updatedSimData = JSON.stringify(data)
    try {
        await fetch(`/api/simcards/sim-update/${id}`, {
            method: 'PUT',
            body: updatedSimData,
            headers: {
                'Content-Type': 'application/json'
        }});
    } catch (error) {
        throw error;
    }
};