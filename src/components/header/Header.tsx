import React, { Component } from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";

class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Календарь событий
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}
export default Header;