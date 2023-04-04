import React from "react";
import App from "./App";
import state from "./state";
const RenderPage = (props:any)=>{
    props.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>
    );
}
export default RenderPage;
