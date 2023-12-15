import {Button, Form, Modal} from "react-bootstrap";
import CreateAcc from '../assets/createAcc.jpg'
import {FaFacebook, FaGoogle} from "react-icons/fa";

type AccountModalProps = {
    onDismiss : () => void
}

export function AccountModal({onDismiss} : AccountModalProps){
    return(
        <>
            <Modal show onHide={onDismiss} >
                <Modal.Header>
                    Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </Modal.Header>
                <Modal.Title>
                    Create Account
                </Modal.Title>
                <Modal.Body className="d-flex flex-row ">
                    <div>
                        <Form className="rounded gap-2">
                            <div className="d-flex flex-row ">
                                <input className="w-50" type="text" placeholder="First Name"/>
                                <input className="w-50" type="text" placeholder="Last Name"/>
                            </div>
                            <div className="d-flex flex-column">
                                <input type="text" placeholder="Email"/>
                                <input type="text" placeholder="Password"/>
                                <input type="text" placeholder="Confirm Password"/>
                                <Button className="mt-4 rounded-pill">Create Account</Button>
                            </div>
                        </Form>
                        <div className="mt-4 btn btn-light w-100"><FaFacebook className='me-1'/>Sign up with Facebook</div>
                        <div className="mt-4 btn btn-light w-100"><FaGoogle className="me-1"/>Sign up with Google</div>
                    </div>
                    <div>
                    <img style={{height : "300px", width: "260px"}} src={CreateAcc} />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}