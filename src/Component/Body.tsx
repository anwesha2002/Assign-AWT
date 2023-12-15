import { Nav, NavDropdown} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import { FaUserGroup} from "react-icons/fa6";

export function Body(){
    return(
        <>
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Navbar.Brand className="border-bottom" href="#"><div >All Posts(32)</div></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link  href="#action1">Article</Nav.Link>
                                <Nav.Link href="#action2">Event</Nav.Link>
                                <Nav.Link href="#action2">Education</Nav.Link>
                                <Nav.Link href="#action2">Job</Nav.Link>
                            </Nav>
                            <Nav>
                                <NavDropdown className="btn btn-sm btn-secondary" title="Write post" id="navbarScrollingDropdown">
                                    <NavDropdown.Item></NavDropdown.Item>
                                </NavDropdown>
                                <div className="btn btn-primary ms-2">
                                    +
                                    <FaUserGroup className="m-1"/>
                                    join group
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}