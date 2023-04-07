export interface IAddEventsState{
    isOpenedAddEventForm: boolean;
    openAddEventForm: ()=>void;
    closeAddEventForm: ()=>void;
    addEventFunction: (event:string)=>void;
}