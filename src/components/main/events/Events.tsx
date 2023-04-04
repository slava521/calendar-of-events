import React, { Component } from 'react';
import {Paper, Stack, styled} from "@mui/material";
import ReturnToMonth from "./ReturnToMonth";
import { IAppState } from '../../../types';

type Props = {
    state: IAppState;
}

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));
const isCurrentDate = (elementDate, currentDay, currentMonth, currentYear) => {
    let elementDayMonthYear = elementDate.split('.');
    elementDayMonthYear = elementDayMonthYear.map((el) => {
        return parseInt(el)
    })
    return elementDayMonthYear[0] === currentDay && elementDayMonthYear[1] === currentMonth && elementDayMonthYear[2] === currentYear;

}
const isCurrentMonth = (elementDate, currentMonth, currentYear) => {
    let elementDayMonthYear = elementDate.split('.');
    elementDayMonthYear = elementDayMonthYear.map((el) => {
        return parseInt(el)
    })
    return elementDayMonthYear[1] === currentMonth && elementDayMonthYear[2] === currentYear;

}
const createEvents = (currentDate, eventList) => {

    return eventList.map((el) => {
        if (currentDate.isDateSelected){
            if (isCurrentDate(el.date, currentDate.currentDay, currentDate.currentMonth, currentDate.currentYear)) {
                return (
                    <Item key={el.id} elevation={2}>
                        {`${el.date}:${el.event}`}
                    </Item>
                )
            }
        }
        else if (isCurrentMonth(el.date, currentDate.currentMonth, currentDate.currentYear)) {
            return (
                <Item key={el.id} elevation={2}>
                    {`${el.date}:${el.event}`}
                </Item>
            )
        }
    })
}

class Events extends Component<Props, any> {
    render() {
        return (
            <div>
                <ReturnToMonth currentDate={this.props.state.currentDate}/>
                <Stack spacing={2}>
                    {createEvents(this.props.state.currentDate, this.props.state.events)}
                </Stack>
            </div>
        )
    }
}

export default Events;