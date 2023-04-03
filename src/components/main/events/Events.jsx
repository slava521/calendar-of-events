import {Paper, Stack, styled} from "@mui/material";
import {Component} from "react";


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));
const isCurrentDate = (elementDate, date) => {
    let elementDayMonthYear = elementDate.split('.');
    elementDayMonthYear = elementDayMonthYear.map((el) => {
        return parseInt(el)
    })
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();
    if (elementDayMonthYear[0] === currentDay && elementDayMonthYear[1] === currentMonth && elementDayMonthYear[2] === currentYear) {
        return true;
    }
    return false;
}
const isCurrentMonth = (elementDate, currentMonth, currentYear) => {
    let elementDayMonthYear = elementDate.split('.');
    elementDayMonthYear = elementDayMonthYear.map((el) => {
        return parseInt(el)
    })
    if (elementDayMonthYear[1] === currentMonth && elementDayMonthYear[2] === currentYear) {
        return true;
    }
    return false;
}
const createEvents = (eventList, currentMonth, currentYear) => {

    return eventList.map((el) => {
        if (isCurrentMonth(el.date, currentMonth, currentYear)) {
            return (
                <Item key={el.id} elevation={2}>
                    {`${el.date}:${el.event}`}
                </Item>
            )
        }
    })
}

class Events extends Component {

    render() {
        return (
            <>
                <Stack spacing={2}>

                    {
                        createEvents(this.props.state.events, this.props.state.currentMonth, this.props.state.currentYear)
                    }
                </Stack>
            </>
        )
    }
}

export default Events;