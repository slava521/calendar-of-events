import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
const Calendar = (props)=>{
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
            {<DateCalendar onMonthChange={props.state.changeMonthYear} onYearChange={props.state.changeMonthYear}/>}
        </LocalizationProvider>
    )
}
export default Calendar;