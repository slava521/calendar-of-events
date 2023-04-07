import React, { Component } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ICalendarDateState } from '../../../types';

type Props = {
    currentDate: ICalendarDateState;
}

class Calendar extends Component<Props, any> {
    render() {
        const showDayEvents=(date)=>{
            this.props.currentDate.changeDay(date);
            this.props.currentDate.selectDate();
        }
        return (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
                {<DateCalendar value={null} onChange={showDayEvents} onMonthChange={this.props.currentDate.changeMonthYear} onYearChange={this.props.currentDate.changeMonthYear}/>}
            </LocalizationProvider>
        )
    }
}
export default Calendar;