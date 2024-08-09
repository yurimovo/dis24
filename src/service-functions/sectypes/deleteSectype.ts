export const deleteSectype = async (id: number) => {
    try {
        const response = await fetch(`/api/sectypes/sectype-delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Ошибка при удалении вида охраны');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};