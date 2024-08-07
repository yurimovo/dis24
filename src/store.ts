import { makeAutoObservable } from 'mobx';

class DisStore {
    currentUser = localStorage.getItem('user') || 'Гость';
    selectedApartmentId = 0;
    selectedActiveFacility = 0;
    selectedEditingFacility = 0;
    selectedActiveApartment = 0;
    selectedEditingApartment = 0;
    selectedSimId = 0;
    selectedActiveSim = 0;
    selectedEditingSim = 0;
    selectedAlarmId = 0;
    selectedActiveAlarm = 0;
    selectedEditingAlarm = 0;
    authenticatedUser = {
        email: '',
        id: '',
        token: '',
    };
    selectedDepartmentId = 0;
    selectedActiveDepartment = 0;
    selectedEditingDepartment = 0;
    selectedHardwareId = 0;
    selectedActiveHardware = 0;
    selectedEditingHardware = 0;

    constructor() {
        makeAutoObservable(this);
    };

    changeCurrentUser = (userName: string) => {
        this.currentUser = userName;
        localStorage.setItem('user', userName);
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

    changeAlarmId = (alarmId: number) => {
        this.selectedAlarmId = alarmId;
    };

    changeActiveAlarm = (activeAlarm: number) => {
        this.selectedActiveAlarm = activeAlarm;
    };

    changeEditingAlarm = (editingAlarm: number) => {
        this.selectedEditingAlarm = editingAlarm;
    };

    setAuthenticatedUser = (email: string, id: string, token: string) => {
        this.authenticatedUser = {
            email: email,
            id: id,
            token: token
        };
    };

    changeDepartmentId = (departmentId: number) => {
        this.selectedDepartmentId = departmentId;
    };

    changeActiveDepartment = (activeDepartment: number) => {
        this.selectedActiveDepartment = activeDepartment;
    };

    changeEditingDepartment = (editingDepartment: number) => {
        this.selectedEditingDepartment = editingDepartment;
    };

    changeHardwareId = (hardwareId: number) => {
        this.selectedHardwareId = hardwareId;
    };

    changeActiveHardware = (activeHardware: number) => {
        this.selectedActiveHardware = activeHardware;
    };

    changeEditingHardware = (editingHardware: number) => {
        this.selectedEditingHardware = editingHardware;
    };
};

const store = new DisStore();
export default store;