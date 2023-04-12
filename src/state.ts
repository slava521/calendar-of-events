import {root} from "./index";
import RenderPage from "./render";
import {IAppState, ICalendarEvent} from "./types";


const date = new Date()
let state: IAppState = {
    events: [
        // {
        //     id: 0,
        //     date: "04.02.2023",
        //     event: "hello world",
        // },
        // {
        //     id: 1,
        //     date: "04.06.2023",
        //     event: "hello worlds",
        // },
        // {
        //     id: 2,
        //     date: "03.03.2023",
        //     event: "hello worldss",
        // },
        // {
        //     id: 3,
        //     date: "03.06.2023",
        //     event: "hello worldsss",
        // },
        // {
        //     id: 4,
        //     date: "04.06.2022",
        //     event: "hello worldssss",
        // },
        // {
        //     id: 5,
        //     date: "04.06.2023",
        //     event: "hello worldsssss",
        // },
        // {
        //     id: 6,
        //     date: "04.05.2023",
        //     event: "hello worldssssss",
        // }
    ],
    currentDate:{
        currentDay: date.getDate(),
        currentMonth: date.getMonth()+1,
        currentYear: date.getFullYear(),
        isDateSelected: true,
        isDateInNewMonthSelected: true,
        changeDay:(date): void=>{
            state.currentDate.currentDay = date.$d.getDate();
        },
        selectDate: (): void=>{
            state.currentDate.isDateSelected = true;
            state.currentDate.isDateInNewMonthSelected = true;
            RenderPage(root);
        },
        showMonth:(): void=>{
            state.currentDate.isDateSelected = false;
            RenderPage(root);
        },
        changeMonthYear:(date): void=>{
            state.currentDate.currentMonth = date.$d.getMonth()+1;
            state.currentDate.currentYear = date.$d.getFullYear();
            state.currentDate.isDateSelected = false;
            state.currentDate.isDateInNewMonthSelected = false;
            RenderPage(root)
        },
    },
    addEvents:{
        isOpenedAddEventForm:false,
        openAddEventForm:(): void=>{
            state.addEvents.isOpenedAddEventForm = true;
            RenderPage(root);
        },
        closeAddEventForm:(): void=>{
            state.addEvents.isOpenedAddEventForm = false;
            state.addEvents.formValue = '';
            RenderPage(root);
        },
        addEventFunction:(): void=>{
            let newId:number = state.events?.length ? state.events[state.events.length-1].id+1 : 0;
            let newEvent:ICalendarEvent = {
                date: `${state.currentDate.currentMonth}.${state.currentDate.currentDay}.${state.currentDate.currentYear}`,
                event: state.addEvents.formValue,
                id: newId,
            }
            state.events.push(newEvent)
            state.addEvents.isOpenedAddEventForm = false;
            RenderPage(root);
        },
        formValue: '',
        changeFormValue: (value:string): void=>{
            state.addEvents.formValue = value;
            RenderPage(root);
        }
    }
}
export default state;