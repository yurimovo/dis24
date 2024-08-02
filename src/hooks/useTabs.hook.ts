import { useSelector } from 'react-redux';

interface TabsState {
    tabIndex: number;
}

interface RootState {
    tabs: TabsState;
}

export function useTabs() {
    const { tabIndex } = useSelector((state: RootState) => state.tabs);

    return {
        tabIndex
    };
};