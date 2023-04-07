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
    setOpen(isOpen){
        this.setState(()=>({
            open:isOpen
        }));
    }
    handleClose=()=>{
        this.setOpen(false)
    }
    addEvent(addEventFunc){
        const eventInput = document.getElementById('eventInput') as HTMLInputElement;

        if (!eventInput.value){
            this.setOpen(true)
        }
        else {
            let tempValue = eventInput.value;
            eventInput.value='';
            addEventFunc(tempValue)
        }
    }
    render() {
        return(
            <>
                {!this.props.addEvents.isOpenedAddEventForm && <Button id="openForm" variant="contained" sx={{mt:'15px',mb:'15px'}} onClick={this.props.addEvents.openAddEventForm}>Добавить событие</Button>}
                {this.props.addEvents.isOpenedAddEventForm &&
                    <ButtonGroup variant="contained" sx={{mt:'15px',mb:'15px'}}>
                        <Button id="addEvent" sx={{width:'50%'}} onClick={()=>this.addEvent(this.props.addEvents.addEventFunction)}>Добавить</Button>
                        <Button sx={{width:'50%'}} onClick={this.props.addEvents.closeAddEventForm}>Отмена</Button>
                    </ButtonGroup>
                }
                <Snackbar open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="warning">Введите хотя бы один символ</Alert>
                </Snackbar>
            </>
        )
    }
}
export default AddEvent