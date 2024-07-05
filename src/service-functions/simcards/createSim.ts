import { Simcard } from "../../types/simcards";

export const createSim = async (data: Simcard) => {
    const simData = JSON.stringify(data)
    try {
        await fetch('/api/simcards/sim-add', {
            method: 'POST',
            body: simData,
            headers: {
                'Content-Type': 'application/json'
        }});
    } catch (error) {
        throw error;
    }
};