import './App.css';
import {Container} from "@mui/material";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
      <>
          <Header/>
          <Container sx={{mt:5}}>
              <Main/>
          </Container>
      </>
  );
}

export default App;
