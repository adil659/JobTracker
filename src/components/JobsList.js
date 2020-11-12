import React from 'react'
import { Button, Nav, Container, Row, Col  } from 'react-bootstrap';
import JobApplication from './JobApplication';
import './JobsList.css'

function JobsList({applications}) {
    return (
        <div className="jobsList">
            <Col className="jobsList__col">
                <Row className="jobsList__row">
                    <h1>Keep track of all your resumes! 🚀</h1>
                </Row>
                <JobApplication applications={applications} ></JobApplication>
            </Col>
        </div>
    )
}

export default JobsList
