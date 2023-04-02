import {Paper, Stack, styled} from "@mui/material";

let state = [
    {
        id: 0,
        date: "02.04.2023",
        event: "hello world",
    },
    {
        id: 1,
        date: "06.04.2023",
        event: "hello worlds",
    }
]
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));
const Events = ()=>{
    return (
        <Stack spacing={2}>
            {
                state.map((el)=>{
                    return (<Item key={el.id} elevation={2}>
                        {`${el.date}:${el.event}`}
                    </Item>)
                })
            }
        </Stack>
    )
}
export default Events;