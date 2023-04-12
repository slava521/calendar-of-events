export interface IAddEventsState {
    isOpenedAddEventForm: boolean;
    openAddEventForm: () => void;
    closeAddEventForm: () => void;
    addEventFunction: () => void;
    formValue: string;
    changeFormValue: (value: string) => void;
}