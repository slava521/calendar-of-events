import './App.css';
import {Container} from "@mui/material";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
function App(props) {
  return (
      <>
          <Header/>
          <Container sx={{mt:5}}>
              <Main state={props.state}/>
          </Container>
      </>
  );
}

export default App;
