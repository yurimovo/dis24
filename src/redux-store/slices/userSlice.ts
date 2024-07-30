import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    email: string | null;
    id: string | null;
    token: string | null;
}

const initialState: UserState = {
    email: null,
    id: null,
    token: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ email: string | null, uid: string | null, idToken: string | null }>) {
            state.email = action.payload.email;
            state.token = action.payload.idToken;
            state.id = action.payload.uid;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;