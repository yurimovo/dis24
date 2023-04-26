import { User } from "../../types/users";

export const createUser = async (data: User) => {
    const userData = JSON.stringify(data)
    try {
        await fetch('/api/users/user_add', {
        method: 'POST',
        mode: "cors",
        credentials: "include",
        body: userData
        });
    } catch (error) {
        throw error;
    }
};