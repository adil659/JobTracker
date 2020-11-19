import React, {  } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import SignInModal from './SigninModal'
import SignUpModal from './SignupModal'
import { useModal } from '../hooks/hooks'
import { auth } from '../firebase'
import { useSelector, useDispatch } from 'react-redux'
import {signOutUser} from '../reducers/userReducer'

import './Header.css'


const Header = ({ applications }) => {
    const dispatch = useDispatch()
    //const [activePage, setActivePage] = useState('')

    const signInModalControls = useModal()
    const signUpModalControls = useModal()
    
    const authUser = useSelector(state => state.authUser)

    // const handleCreateJob = (eventKey, event) => {
    //     event.preventDefault()
    //     //setActivePage('AddJobApplication')
    // }

    const logout = () => {
        auth.signOut();
        dispatch(signOutUser())
    }

    return (
        <div className='header'>
            <Nav className="navbar">
                <Container fluid className="p-0 ">

                    <Row className="header__content">
                        <Col className="header__menu">
                            <Nav.Item>
                            </Nav.Item>
                                <Nav.Link href="/"><h4>Φ Job Tracker</h4></Nav.Link>
                            <Nav.Item>
                                <Nav.Link href="/createjob">Create Job Post</Nav.Link>
                            </Nav.Item>
                        </Col>

                        <Col className="header__authentication">
                            <Row className="">
                                {!authUser ? 
                                (<>
                                <Button className="btn btn-danger" onClick={signInModalControls.showModal}>Sign in</Button>
                                <Button className="btn btn-warning" onClick={signUpModalControls.showModal}>Sign up</Button></>)
                                :
                                (<><Button className="btn btn-danger" onClick={logout}>Logout</Button></>)
                                }
                                
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Nav>

            <SignInModal controls={signInModalControls} />
            <SignUpModal controls={signUpModalControls} />



        </div>
    )
}

export default Header