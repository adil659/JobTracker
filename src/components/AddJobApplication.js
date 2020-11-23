import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { createApplication, createLocalApplication } from '../reducers/applicationReducer'
import { useDispatch, useSelector } from 'react-redux'
import {
    // ...
    useHistory
} from "react-router-dom"

const AddJobApplication = () => {
    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.authUser)
    const activeFolder = useSelector(state => state.activeFolder)


    const createJob = (event) => {
        event.preventDefault()

        const newObject = {
            position,
            company,
            link,
            description,
            applied: false
        }

        if (user) {
            dispatch(createApplication(user?.uid, activeFolder, newObject))
        }
        else {
            dispatch(createLocalApplication(newObject))
        }


        history.push('/home')
    }
    return (
        <div>

            <Container>
                <h1>NICE keep applying, you got this! <span role="img" aria-label="flames">🔥🔥</span></h1>

                <Form onSubmit={createJob}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Position</Form.Label>
                        <Form.Control type="text" placeholder="position" onChange={({ target }) => setPosition(target.value)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" placeholder="company" onChange={({ target }) => setCompany(target.value)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Link</Form.Label>
                        <Form.Control type="text" placeholder="url" onChange={({ target }) => setLink(target.value)} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={({ target }) => setDescription(target.value)} />
                    </Form.Group>
                    <Form.File id="formcheck-api-custom" custom>
                        <Form.File.Input isValid />
                        <Form.File.Label data-browse="Button text">
                            Custom file input
                    </Form.File.Label>
                        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                    </Form.File>
                    <Form.File
                        id="custom-file"
                        label="Attach Coverletter"
                        custom
                    />

                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </Container>

        </div>
    )
}

export default AddJobApplication