import React, { Component } from 'react';
import {Button} from "@mui/material";
import { ICalendarDateState } from '../../../types';

type Props = {
    currentDate: ICalendarDateState;
}

class ReturnToMonth extends Component<Props, any> {
    render() {
        return(
            this.props.currentDate.isDateSelected && <Button variant="contained" sx={{mb:'10px'}} onClick={this.props.currentDate.showMonth}>Показать все события месяца</Button>
        )
    }
}
export default ReturnToMonth
