import React from 'react'
import { Row, Col  } from 'react-bootstrap';
import JobApplication from './JobApplication';
import './JobsList.css'

function JobsList({applications}) {
    return (
        <div className="jobsList">
            <Col className="jobsList__col">
                <Row className="jobsList__row">
                    <h1>Keep track of all your resumes! <span role="img" aria-label="rocket">🚀</span></h1>
                </Row>
                <JobApplication applications={applications} ></JobApplication>
            </Col>
        </div>
    )
}

export default JobsList
