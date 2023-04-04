import {root} from "./index";
import RenderPage from "./render";
import { IAppState } from "./types";


const date = new Date()
let state: IAppState = {
    events: [
        {
            id: 0,
            date: "02.04.2023",
            event: "hello world",
        },
        {
            id: 1,
            date: "06.04.2023",
            event: "hello worlds",
        },
        {
            id: 2,
            date: "03.03.2023",
            event: "hello worldss",
        },
        {
            id: 3,
            date: "06.03.2023",
            event: "hello worldsss",
        },
        {
            id: 4,
            date: "06.04.2022",
            event: "hello worldssss",
        }
    ],
    currentDate:{
        currentDay:0,
        currentMonth: date.getMonth()+1,
        currentYear: date.getFullYear(),
        isDateSelected: false,
        changeDay:(date)=>{
            state.currentDate.currentDay = date.$d.getDate();
            console.log(state.currentDate.currentDay)
        },
        selectDate: ()=>{
            state.currentDate.isDateSelected = true;
            RenderPage(root);
        },
        showMonth:()=>{
            state.currentDate.isDateSelected = false;
            RenderPage(root);
        },
        changeMonthYear:(date)=>{
            state.currentDate.currentMonth = date.$d.getMonth()+1;
            state.currentDate.currentYear = date.$d.getFullYear();
            state.currentDate.isDateSelected = false;
            RenderPage(root)
        },
    },
}
export default state;