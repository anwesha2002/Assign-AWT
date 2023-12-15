
import HomeImage from '../assets/homeImage.jpg'
import '../Style/Home.css'
import {Body} from "../Component/Body.tsx";
import {Container} from "react-bootstrap";
export function Home(){
    return(
        <>
            <img className="w-100 homeImg object-fit-cover position-relative" src={HomeImage}/>
            <div className="position-absolute hometext top-50 text-white">
                <h2 className="lg">Computer Engineering</h2>
                <p>142,765 Computer Engineers follow this</p>
            </div>
            <Container fluid="sm">
                <Body/>
            </Container>
        </>
    )
}