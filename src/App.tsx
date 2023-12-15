import './App.css'
import {Navbar} from "./Component/Navbar.tsx";
import {Home} from "./Component/Home.tsx";
import {Container} from "react-bootstrap";
import {Body} from "./Component/Body.tsx";

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
        <Container fluid="sm">
            <Body/>
        </Container>
    </>
  )
}

export default App
