import './App.css';
import {Container} from "@mui/material";
import Calendar from "./components/calendar";
import Header from "./components/Header";
function App() {
  return (
      <>
          <Header/>
          <Container>
              <Calendar/>
          </Container>
      </>
  );
}

export default App;
