import {Button} from "@mui/material";

const ReturnToMonth = (props) => {
    return(
        props.currentDate.isDateSelected && <Button variant="contained" sx={{mb:'15px'}} onClick={props.currentDate.showMonth}>Показать все события месяца</Button>
    )
}
export default ReturnToMonth
