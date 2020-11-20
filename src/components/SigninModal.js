import React from 'react'
import { Button, Row, Modal } from 'react-bootstrap';
import { auth } from '../firebase'
import {useField } from '../hooks/hooks'
import {useDispatch} from 'react-redux'
import {setCurrentUser} from '../reducers/userReducer'

function SigninModal({ controls }) {

    const { show, closeModal } = controls;
    const dispatch = useDispatch()

    const email = useField('text')
    const password = useField('password')


    const signIn = (event) => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            dispatch(setCurrentUser(res.user))
        })
          .catch((error) => alert(error.message))

        closeModal()
    }
    return (
        <div>
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row >
                        <h5 className="col-3  pl-2 mr-3">Email</h5>
                        <input type={email.type} 
                        placeholder="email"
                        onChange={email.onChange}
                        value={email.value} />
                    </Row>
                    <Row className="mt-2">
                        <h5 className="col-3  pl-2 mr-3 mt-2">Password</h5>
                        <input type={password.type} 
                        placeholder="password"
                        onChange={password.onChange}
                        value={password.value} />
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={signIn}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SigninModal
