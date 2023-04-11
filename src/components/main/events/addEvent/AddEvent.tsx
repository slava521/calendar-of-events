import React, { Component } from 'react';
import {Alert, Button, Snackbar} from "@mui/material";
import {IAddEventsState} from "../../../../types";
import ButtonGroup from "@mui/material/ButtonGroup";


type Props = {
    addEvents: IAddEventsState;
}
type State = {
    open: boolean;
}
class AddEvent extends Component<Props,State> {
    state: State = {
        open: false,
    }
    setOpen(open: boolean): void {
        this.setState(()=>({open}));
    }
    handleClose=()=>{
        this.setOpen(false)
    }
    addEvent=()=>{
        if (!this.props.addEvents.formValue){
            this.setOpen(true)
        }
        else {
            this.props.addEvents.addEventFunction()
            this.props.addEvents.changeFormValue('')
        }
    }
    readonly snackbarDisplayTime = 3000;
    render() {
        return(
            <>
                {!this.props.addEvents.isOpenedAddEventForm && <Button id="openForm" variant="contained" sx={{mt:'15px',mb:'15px'}} onClick={this.props.addEvents.openAddEventForm}>Добавить событие</Button>}
                {this.props.addEvents.isOpenedAddEventForm &&
                    <ButtonGroup variant="contained" sx={{mt:'15px',mb:'15px'}}>
                        <Button sx={{width:'50%'}} onClick={this.addEvent}>Добавить</Button>
                        <Button sx={{width:'50%'}} onClick={this.props.addEvents.closeAddEventForm}>Отмена</Button>
                    </ButtonGroup>
                }
                <Snackbar open={this.state.open} autoHideDuration={this.snackbarDisplayTime} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="warning">Введите хотя бы один символ</Alert>
                </Snackbar>
            </>
        )
    }
}
export default AddEvent