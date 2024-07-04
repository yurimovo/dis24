import { makeAutoObservable } from 'mobx';

class DisStore {
    currentUser = 'Гость';
    selectedApartmentId = 0;
    selectedActiveFacility = 0;
    selectedEditingFacility = 0;
    selectedActiveApartment = 0;
    selectedEditingApartment = 0;
    selectedSimId = 0;
    selectedActiveSim = 0;
    selectedEditingSim = 0;

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

    changeActiveApartment = (activeApartment: number) => {
        this.selectedActiveApartment = activeApartment;
    };

    changeEditingApartment = (editingApartment: number) => {
        this.selectedEditingApartment = editingApartment;
    };

    changeSimId = (simId: number) => {
        this.selectedSimId = simId;
    };

    changeActiveSim = (activeSim: number) => {
        this.selectedActiveSim = activeSim;
    };

    changeEditingSim = (editingSim: number) => {
        this.selectedEditingSim = editingSim;
    };
};

const store = new DisStore();
export default store;