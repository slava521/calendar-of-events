import React, {Component} from 'react';
import Calendar from "./calendar/Calendar";
import Events from "./events/Events";
import {Box, Divider, Grid, Typography} from "@mui/material";
import AddEvent from "./events/addEvent/AddEvent";
import "./main.css"
import {IAppState} from "../../types";
import ReturnToMonth from "./events/ReturnToMonth";

type Props = {
    state: IAppState,
}

class Main extends Component<Props, any> {
    render() {
        return (
            <Grid container>
                <Grid item md={7} xs={12}>
                    <Typography>Календарь</Typography>
                    <Divider/>
                    <Calendar currentDate={this.props.state.currentDate}/>
                </Grid>
                <Grid item md={5} xs={12}>
                    <Typography>События</Typography>
                    <Divider/>
                    <Box className="events">
                        <ReturnToMonth state={this.props.state}/>
                        <Box className="eventList">
                            <Events state={this.props.state}/>
                        </Box>
                        <AddEvent addEvents={this.props.state.addEvents}/>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default Main;