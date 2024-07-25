export const deleteAlarm = async (id: number) => {
    try {
        const response = await fetch(`/api/alarms/alarm-delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Ошибка при удалении ложняка');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};