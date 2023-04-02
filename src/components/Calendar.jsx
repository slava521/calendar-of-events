import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
const Calendar = ()=>{
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
            <DateCalendar />
        </LocalizationProvider>
    )
}
export default Calendar;