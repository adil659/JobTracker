import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {updateApplication, removeApplication } from '../reducers/applicationReducer'
import {
    // ...
    useParams,
    useHistory
  } from "react-router-dom"
import { Button, Container } from 'react-bootstrap'

  


const JobApplicationDetails = () => {
    const applications = useSelector(state => state.applications)
    const user = useSelector(state => state.authUser)
    const dispatch = useDispatch()
    const history = useHistory()

    const id = useParams().id
    const application = applications.find((application) => application.id === id)

    const handleApplied =  (event) => {
        const updatedApplication = {
            ...application,
            applied: !application.applied
        }
        dispatch(updateApplication(user?.uid, id, updatedApplication))
    }

    const handleDelete = (event) => {
        dispatch(removeApplication(id)) 
        history.push('/home')
    }

    const showPost = () => {
        
        return (
        <div>
            <h1>Posting</h1>
            <br></br>
            <h2>{application.position} @ {application.company}</h2>
            <h3><a href={application.link} target="_blank"  rel="noopener noreferrer">applied here</a></h3>
            <p style={{whiteSpace: 'pre'}}>{application.description}</p>

            <Button variant={application.applied ? 'success' : 'danger'} onClick={handleApplied}>Applied?</Button>{' '}
            <Button variant="warning" onClick={handleDelete}>Delete</Button>
        </div>
  )
    }
    return (
        <div>
            <Container>
            {application ? showPost() : false}

            </Container>
        </div>
        
    )
}

export default JobApplicationDetails