import { Fcat } from "../../types/fcats";

export const createFcat = async (data: Fcat) => {
    const fcatData = JSON.stringify(data)
    try {
        await fetch('/api/fcats/fcat-add', {
            method: 'POST',
            body: fcatData,
            headers: {
                'Content-Type': 'application/json'
        }});
    } catch (error) {
        throw error;
    }
};