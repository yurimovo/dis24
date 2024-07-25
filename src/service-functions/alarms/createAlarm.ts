import { Alarm } from "../../types/alarms";

export const createAlarm = async (data: Alarm) => {
    const alarmData = JSON.stringify(data)
    try {
        await fetch('/api/alarms/alarm-add', {
            method: 'POST',
            body: alarmData,
            headers: {
                'Content-Type': 'application/json'
        }});
    } catch (error) {
        throw error;
    }
};