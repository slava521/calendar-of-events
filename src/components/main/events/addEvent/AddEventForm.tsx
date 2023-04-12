import {TextField} from "@mui/material";
import {DateField, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import React, {Component} from "react";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import {IAddEventsState, ICalendarDateState} from "../../../../types";

type Props = {
    currentDate: ICalendarDateState;
    addEvent: IAddEventsState;
}
class AddEventForm extends Component<Props, any> {
    get defaultDateValue():dayjs.Dayjs {
        return dayjs(`${this.props.currentDate.currentMonth}.${this.props.currentDate.currentDay}.${this.props.currentDate.currentYear}`).locale('ru');
    }
    render() {
        return (
            <>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {this.props.currentDate.isDateSelected &&
                        <DateField
                            label="Дата"
                            value={this.defaultDateValue}
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
                    onChange={value=>this.props.addEvent.changeFormValue(value.target.value)}
                />
            </>
        )
    }
}

export default AddEventForm