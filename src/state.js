import {root} from "./index";
import App from "./App";
import React from "react";

const date = new Date()
let state = {
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
    currentMonth: date.getMonth()+1,
    currentYear: date.getFullYear(),
    changeMonthYear:(date)=>{
        state.currentMonth = date.$d.getMonth()+1;
        state.currentYear = date.$d.getFullYear();
        root.render(
            <React.StrictMode>
                <App state={state}/>
            </React.StrictMode>
        );
    },
}
export default state;