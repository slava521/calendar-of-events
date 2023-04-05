import React, {Component} from 'react';
import {Button} from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import {ICalendarDateState} from '../../../types';

type Props = {
    currentDate: ICalendarDateState;
}

class ReturnToMonth extends Component<Props, any> {
    render() {
        return (
            <ButtonGroup variant="text">
                {(this.props.currentDate.isDateSelected && this.props.currentDate.isDateInNewMonthSelected) &&
                    <>
                        <Button sx={{mb: '10px', width: '50%'}} onClick={this.props.currentDate.selectDate}
                                disabled>День</Button>
                        <Button sx={{mb: '10px', width: '50%'}}
                                onClick={this.props.currentDate.showMonth}>Месяц</Button>
                    </>}
                {(!this.props.currentDate.isDateSelected && this.props.currentDate.isDateInNewMonthSelected) &&
                    <>
                        <Button sx={{mb: '10px', width: '50%'}}
                                onClick={this.props.currentDate.selectDate}>День</Button>
                        <Button sx={{mb: '10px', width: '50%'}} onClick={this.props.currentDate.showMonth}
                                disabled>Месяц</Button>
                    </>}
                {!this.props.currentDate.isDateInNewMonthSelected &&
                    <>
                        <Button sx={{mb: '10px', width: '50%'}}
                                onClick={this.props.currentDate.selectDate} disabled>День</Button>
                        <Button sx={{mb: '10px', width: '50%'}} onClick={this.props.currentDate.showMonth}
                                disabled>Месяц</Button>
                    </>}

            </ButtonGroup>
        )
    }
}

export default ReturnToMonth
