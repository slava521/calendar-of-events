import React, { Component } from 'react';
import {Button} from "@mui/material";

class AddEvent extends Component {
    render() {
        return(
            <Button variant="contained" sx={{mt:'15px',mb:'15px'}}>Добавить событие</Button>
        )
    }
}
export default AddEvent