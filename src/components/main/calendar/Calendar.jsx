import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
const Calendar = (props)=>{
    const showDayEvents=(date)=>{
        props.currentDate.changeDay(date);
        props.currentDate.selectDate();
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
            {<DateCalendar value={null} onChange={showDayEvents} onMonthChange={props.currentDate.changeMonthYear} onYearChange={props.currentDate.changeMonthYear}/>}
        </LocalizationProvider>
    )
}
export default Calendar;