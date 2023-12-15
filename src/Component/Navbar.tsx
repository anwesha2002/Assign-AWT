import Logo from '../assets/Logo.png'
import { Container, Nav, Navbar as NavbarBS} from 'react-bootstrap'
import '../Style/Navbar.css'
import {FaSearch} from "react-icons/fa";
export function Navbar(){
    return (
        <NavbarBS collapseOnSelect expand="lg" >
            <Container fluid="sm">
                <NavbarBS.Brand href="#home">
                    <img className="Navbarlogo" src={Logo}/>
                </NavbarBS.Brand>
                <NavbarBS.Toggle aria-controls="responsive-NavbarBS-nav" />
                <NavbarBS.Collapse id="responsive-NavbarBS-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#features" className="bg-body-secondary rounded-pill flex flex-row align-items-center">
                            <FaSearch className="me-2"/>
                            Search for your favorite groups in ATG
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            Create account.
                            <span className="text-primary ms-1">It's free</span>
                        </Nav.Link>
                    </Nav>
                </NavbarBS.Collapse>
            </Container>
        </NavbarBS>
    )
}