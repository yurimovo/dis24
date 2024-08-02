import { useSelector } from 'react-redux';

interface AuthState {
    email: string | null;
    id: string | null;
    token: string | null;
    userName: string | null;
    isAdmin: boolean;
}

interface RootState {
    user: AuthState;
}

export function useAuth() {
    const { email, token, id, userName, isAdmin } = useSelector((state: RootState) => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
        userName,
        isAdmin
    };
};