import React, {Component} from 'react';
import {Paper, Stack, styled, Typography} from "@mui/material";
import {IAppState, ICalendarDateState, ICalendarEvent} from '../../../types';

type Props = {
    state: IAppState;
}

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
    width: '95%',
    marginLeft: '2.5% !important',
    marginTop: '10px',

}));
const isCurrentDate = (elementDate: string, currentDay: number, currentMonth: number, currentYear: number) => {
    let elementDayMonthYear = elementDate.split('.');
    let intElementDayMonthYear = elementDayMonthYear.map((el) => {
        return parseInt(el)
    })
    return intElementDayMonthYear[0] === currentDay && intElementDayMonthYear[1] === currentMonth && intElementDayMonthYear[2] === currentYear;

}
const isCurrentMonth = (elementDate: string, currentMonth: number, currentYear: number) => {
    let elementDayMonthYear = elementDate.split('.');
    let intElementDayMonthYear = elementDayMonthYear.map((el) => {
        return parseInt(el)
    })
    return intElementDayMonthYear[1] === currentMonth && intElementDayMonthYear[2] === currentYear;

}
const createEvents = (currentDate: ICalendarDateState, eventList: Array<ICalendarEvent>) => {
    let alert:string;
    let currentEvents:Array<any>;
    if (currentDate.isDateSelected) {
        currentEvents = eventList.map((el) => {
            if (isCurrentDate(el.date, currentDate.currentDay, currentDate.currentMonth, currentDate.currentYear)) {
                return (
                    <Item key={el.id} elevation={2}>
                        {`${el.date}:${el.event}`}
                    </Item>
                )
            }
            else{
                return false;
            }
        })
        alert='В этот день нет событий'
    } else{
        currentEvents = eventList.map((el) => {
            if (isCurrentMonth(el.date, currentDate.currentMonth, currentDate.currentYear)) {
                return (
                    <Item key={el.id} elevation={2}>
                        {`${el.date}:${el.event}`}
                    </Item>
                )
            }
            else{
                return false;
            }
        })
        alert='В этом месяце нет событий'
    }
    let isNull = (events:Array<any>)=>{
        return events.every((el)=>{
            return !el;
        })
    }
    if (!isNull(currentEvents)){
        return currentEvents;
    }
    else{
        return <>
            <Typography sx={{mt:'25px'}}>{alert}</Typography>
        </>

    }

}

class Events extends Component<Props, any> {
    render() {
        return (
            <Stack sx={{mb:'10px'}} spacing={2}>
                {createEvents(this.props.state.currentDate, this.props.state.events)}
            </Stack>
        )
    }
}

export default Events;