import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TabsState {
    tabIndex: number;
};

const initialState: TabsState = {
    tabIndex: 0
};

const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setTabIndex(state, action: PayloadAction<{ 
            tabIndex: number | 0, 
        }>) {
            state.tabIndex = action.payload.tabIndex;
        },
    },
});

export const { setTabIndex } = tabsSlice.actions;

export default tabsSlice.reducer;