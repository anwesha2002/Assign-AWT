import {Button, Card, Dropdown, DropdownToggle} from "react-bootstrap";
import {ContentModel} from "../model/ContentModel.ts";
import { FaCalendar, FaEye, FaSuitcase} from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import {FaLocationPin} from "react-icons/fa6";

export function Content({ title, name, views, descrip, genre, img, profilePic, date, location, company} : ContentModel){
    return(
        <>
            <Card className="w-75 mt-3 p-0">
                <Card.Img variant="top" className="w-100 bounded" src={img}>
                </Card.Img>
                <Card.Body>
                    {genre}
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <Card.Title className="w-75">{title}</Card.Title>
                            <Dropdown>
                                <DropdownToggle className="dropdown-toggle" variant="light" id="dropdown-basic">
                                    <h3>...</h3>
                                </DropdownToggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                    </div>
                    {descrip && <p>{descrip}</p>}
                    {!descrip &&
                    <div>
                        {date? <span className="me-5 "><FaCalendar className="me-2"/>{date}</span> : <span><FaSuitcase className="me-2"/>{company}</span>}
                        <span className="ms-5"><FaLocationPin/> {location}</span>
                    </div>}
                    {genre === "\uD83D\uDDD3\uFE0F Meetup" && <Button className="my-3 btn-outline-secondary btn-light w-100 text-danger">view website</Button>}
                    {genre === "\uD83D\uDCBC\uFE0F Job" && <Button className="my-3 btn-outline-secondary btn-light w-100 text-info">Apply on Timesjobs</Button>}
                    <div className="d-flex mt-3 flex-row justify-content-between align-items-center">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <img style={{height : "40px", width : "40px"}} src={profilePic}/>
                             <h5 className="ms-2">{name}</h5>
                        </div>
                        <div>
                            <FaEye/>
                            {views}k views
                            <Button className="btn btn-sm btn-secondary ms-5"><IoShareSocial/></Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}