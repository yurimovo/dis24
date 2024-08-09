import { Sectype } from "../../types/sectypes";

export const createSectype = async (data: Sectype) => {
    const sectypeData = JSON.stringify(data)
    try {
        await fetch('/api/sectypes/sectype-add', {
            method: 'POST',
            body: sectypeData,
            headers: {
                'Content-Type': 'application/json'
        }});
    } catch (error) {
        throw error;
    }
};