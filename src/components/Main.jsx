import Calendar from "./Calendar";
import Events from "./Events";
import {Divider, Grid, Typography} from "@mui/material";
import AddEvent from "./AddEvent";
import "./main.css"

const Main = ()=>{
    return (
        <Grid container>
            <Grid item md={7} xs={12}>
                <Typography>Календарь</Typography>
                <Divider/>
                <Calendar/>
            </Grid>
            <Grid item md={5} xs={12}>
                <Typography>События</Typography>
                <Divider/>
                <div className="events">
                    <Events/>
                    <AddEvent/>
                </div>
            </Grid>
        </Grid>
    )
}
export default Main;