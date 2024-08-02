export const deleteDepartment = async (id: number) => {
    try {
        const response = await fetch(`/api/departments/department-delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Ошибка при удалении подразделения');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};