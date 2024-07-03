import { makeAutoObservable } from 'mobx';

class DisStore {
    currentUser = 'Гость';
    selectedApartmentId = 0;
    selectedActiveFacility = 0;
    selectedEditingFacility = 0;

    constructor() {
        makeAutoObservable(this);
    };

    changeCurrentUser = (userName: string) => {
        this.currentUser = userName;
    }

    changeApartmentId = (id: number) => {
        this.selectedApartmentId = id;
    };

    changeActiveFacility = (activeFacility: number) => {
        this.selectedActiveFacility = activeFacility;
    };

    changeEditingFacility = (editingFacility: number) => {
        this.selectedEditingFacility = editingFacility;
    };
};

const store = new DisStore();
export default store;