export const deleteSim = async (id: number) => {
    try {
        const response = await fetch(`/api/simcards/sim-delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Ошибка при удалении SIM');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};