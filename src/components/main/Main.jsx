import Calendar from "./calendar/Calendar";
import Events from "./events/Events";
import {Divider, Grid, Typography} from "@mui/material";
import AddEvent from "./events/AddEvent";
import "./main.css"
import ReturnToMonth from "./events/ReturnToMonth";

const Main = (props)=>{
    return (
        <Grid container>
            <Grid item md={7} xs={12}>
                <Typography>Календарь</Typography>
                <Divider/>
                <Calendar currentDate={props.state.currentDate}/>
            </Grid>
            <Grid item md={5} xs={12}>
                <Typography>События</Typography>
                <Divider/>
                <div className="events">
                    <ReturnToMonth currentDate={props.state.currentDate}/>
                    <Events state={props.state}/>
                    <AddEvent/>
                </div>
            </Grid>
        </Grid>
    )
}
export default Main;