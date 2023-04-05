import React, {Component} from 'react';
import {Paper, Stack, styled, Typography} from "@mui/material";
import { IAppState, ICalendarDateState, ICalendarEvent} from '../../../types';

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

const eventsBuilderMap = {
    day: {
        checkCallback: (el: ICalendarEvent, date: ICalendarDateState) =>
            isCurrentDate(el.date, date.currentDay, date.currentMonth, date.currentYear),
        alert: 'В этот день нет событий'
    },
    month: {
        checkCallback: (el: ICalendarEvent, date: ICalendarDateState) =>
            isCurrentMonth(el.date, date.currentMonth, date.currentYear),
        alert: 'В этом месяце нет событий'
    }
}

const createEvents = (currentDate: ICalendarDateState, eventList: Array<ICalendarEvent>) => {
    const eventsBuilder = eventsBuilderMap[currentDate.isDateSelected ? 'day' : 'month'];
    const currentEvents = eventList
        .filter((el: ICalendarEvent) => eventsBuilder.checkCallback(el, currentDate))
        .map((el: ICalendarEvent) => <Item key={el.id} elevation={2}>{`${el.date}:${el.event}`}</Item>);
    const alert = eventsBuilder.alert;

    return currentEvents?.length ? currentEvents : <>
        <Typography sx={{ mt: '25px' }}>{alert}</Typography>
    </>;
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