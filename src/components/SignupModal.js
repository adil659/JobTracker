import React, {  } from 'react'
import { Button, Row, Modal } from 'react-bootstrap';
import { auth } from '../firebase'
import {useField } from '../hooks/hooks'

function SignupModal({ controls }) {

    const { show, closeModal} = controls;

    const email = useField('text')
    const password = useField('password')
    const username = useField('text')

    const signUp = (event) => {
        event.preventDefault()
    
        auth.createUserWithEmailAndPassword(email.value, password.value)
          .then((authUser) => {
            return authUser.user.updateProfile({
              displayName: username.value
            })
          })
          .catch((error) => alert(error.message))
    
          closeModal()
    
      }

    return (
        <>
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
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
                        <h5 className="col-3  pl-2 mr-3">Username</h5>
                        <input type={username.type} 
                        placeholder="username"
                        onChange={username.onChange}
                        value={username.value} />
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
                    <Button type="submit" variant="primary" onClick={signUp}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SignupModal
