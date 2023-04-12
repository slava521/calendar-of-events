import React, {Component} from 'react';
import {Paper, Stack, styled, Typography} from "@mui/material";
import {IAppState, ICalendarDateState, ICalendarEvent} from '../../../types';
import AddEventForm from "./addEvent/AddEventForm";
import dayjs from "dayjs";

type Props = {
    state: IAppState;
}

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 60,
    lineHeight: '60px',
    width: '95%',
    marginLeft: '2.5% !important',
    marginTop: '10px',

}));
const isCurrentDate = (elementDate: dayjs.Dayjs, currentDay: number, currentMonth: number, currentYear: number) => {
    return elementDate.date() === currentDay && elementDate.month()+1 === currentMonth && elementDate.year() === currentYear;

}
const isCurrentMonth = (elementDate: dayjs.Dayjs, currentMonth: number, currentYear: number) => {
    return elementDate.month()+1 === currentMonth && elementDate.year() === currentYear

}

const eventsBuilderMap = {
    day: {
        checkCallback: (el: ICalendarEvent, date: ICalendarDateState) =>
            isCurrentDate(dayjs(el.date) , date.currentDay, date.currentMonth, date.currentYear),
        alert: 'В этот день нет событий'
    },
    month: {
        checkCallback: (el: ICalendarEvent, date: ICalendarDateState) =>
            isCurrentMonth(dayjs(el.date), date.currentMonth, date.currentYear),
        alert: 'В этом месяце нет событий'
    }
}

const createEvents = (currentDate: ICalendarDateState, eventList: Array<ICalendarEvent>) => {
    const eventsBuilder = eventsBuilderMap[currentDate.isDateSelected ? 'day' : 'month'];
    const currentEvents = eventList
        .filter((el: ICalendarEvent) => eventsBuilder.checkCallback(el, currentDate))
        .map((el: ICalendarEvent) => <Item key={el.id} elevation={2}>{`${dayjs(el.date).format('DD.MM.YYYY')}:${el.event}`}</Item>);
    const alert = eventsBuilder.alert;

    return currentEvents?.length ? currentEvents : <>
        <Typography sx={{ mt: '25px' }}>{alert}</Typography>
    </>;
}

class Events extends Component<Props, any> {
    render() {
        return (
            <Stack sx={{mb:'10px'}} spacing={2}>
                {!this.props.state.addEvents.isOpenedAddEventForm && createEvents(this.props.state.currentDate, this.props.state.events)}
                {this.props.state.addEvents.isOpenedAddEventForm && <AddEventForm currentDate={this.props.state.currentDate} addEvent={this.props.state.addEvents}/>}
            </Stack>
        )
    }
}

export default Events;