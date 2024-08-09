import { HardwareType } from "../../types/hardware";

export const createHardware = async (data: HardwareType) => {
    const hardwareData = JSON.stringify(data)
    try {
        await fetch('/api/hardware/hardware-add', {
            method: 'POST',
            body: hardwareData,
            headers: {
                'Content-Type': 'application/json'
        }});
    } catch (error) {
        throw error;
    }
};