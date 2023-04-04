import './App.css';
import React from 'react';
import {Container} from "@mui/material";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Component } from 'react';
import { IAppState } from './types';

type Props = {
    state: IAppState
}

class App extends Component<Props, any> {
    render() {
        return (
            <>
                <Header/>
                <Container sx={{mt:5}}>
                    <Main state={this.props.state}/>
                </Container>
            </>
        );
    }
}

export default App;
