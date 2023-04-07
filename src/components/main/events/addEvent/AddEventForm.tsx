import {TextField} from "@mui/material";
import {DateField, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import React, {Component} from "react";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import {ICalendarDateState} from "../../../../types";

type Props = {
    currentDate: ICalendarDateState;
}
class AddEventForm extends Component<Props, any> {
    render() {
        return (
            <>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {this.props.currentDate.isDateSelected &&
                        <DateField
                            label="Дата"
                            value={dayjs(`${this.props.currentDate.currentMonth}.${this.props.currentDate.currentDay}.${this.props.currentDate.currentYear}`).locale('ru')}
                            format="LL"
                            sx={{WebkitTextFillColor: "black !important"}}
                            style={{margin: '0 10px', marginTop: '10px'}}
                            disabled
                        />
                    }
                    {!this.props.currentDate.isDateSelected &&
                        <DateField
                            label="Выберите дату"
                            format="LL"
                            sx={{WebkitTextFillColor: "black !important"}}
                            style={{margin: '0 10px', marginTop: '10px'}}
                            disabled
                        />
                    }
                </LocalizationProvider>
                <TextField
                    id="eventInput"
                    label="Событие"
                    multiline
                    style={{margin: '0 10px', marginTop: '15px'}}
                    rows={3}
                />
            </>
        )
    }
}

export default AddEventForm