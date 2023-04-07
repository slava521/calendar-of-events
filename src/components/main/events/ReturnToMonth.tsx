import React, {Component} from 'react';
import {Button} from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import {IAppState} from '../../../types';

type Props = {
    state: IAppState;
}

class ReturnToMonth extends Component<Props, any> {
    render() {
        return (
            <ButtonGroup variant="text">
                {(this.props.state.currentDate.isDateSelected && this.props.state.currentDate.isDateInNewMonthSelected && !this.props.state.addEvents.isOpenedAddEventForm) &&
                    <>
                        <Button sx={{mb: '10px', width: '50%'}} onClick={this.props.state.currentDate.selectDate}
                                disabled>День</Button>
                        <Button sx={{mb: '10px', width: '50%'}}
                                onClick={this.props.state.currentDate.showMonth}>Месяц</Button>
                    </>}
                {(!this.props.state.currentDate.isDateSelected && this.props.state.currentDate.isDateInNewMonthSelected && !this.props.state.addEvents.isOpenedAddEventForm) &&
                    <>
                        <Button sx={{mb: '10px', width: '50%'}}
                                onClick={this.props.state.currentDate.selectDate}>День</Button>
                        <Button sx={{mb: '10px', width: '50%'}} onClick={this.props.state.currentDate.showMonth}
                                disabled>Месяц</Button>
                    </>}
                {(!this.props.state.currentDate.isDateInNewMonthSelected || this.props.state.addEvents.isOpenedAddEventForm) &&
                    <>
                        <Button sx={{mb: '10px', width: '50%'}}
                                onClick={this.props.state.currentDate.selectDate} disabled>День</Button>
                        <Button sx={{mb: '10px', width: '50%'}} onClick={this.props.state.currentDate.showMonth}
                                disabled>Месяц</Button>
                    </>}

            </ButtonGroup>
        )
    }
}

export default ReturnToMonth
