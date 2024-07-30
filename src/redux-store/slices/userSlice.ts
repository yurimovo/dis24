import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    email: string | null;
    id: string | null;
    token: string | null;
    userName: string | null;
}

const initialState: UserState = {
    email: null,
    id: null,
    token: null,
    userName: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ email: string | null, uid: string | null, idToken: string | null, userName: string | null }>) {
            state.email = action.payload.email;
            state.token = action.payload.idToken;
            state.id = action.payload.uid;
            state.userName = action.payload.userName;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.userName = null;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;