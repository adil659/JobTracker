import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import JobApplication from './JobApplication';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import './JobsList.css'

function JobsList({applications}) {
    const activeFolder = useSelector(state => state.activeFolder)

    return (
        <div className="jobsList">
            <Col className="jobsList__col">
                <Row className="jobsList__row">
                    <h1>Keep track of all your resumes! <span role="img" aria-label="rocket">🚀</span></h1>
                </Row>
                <div className="jobsList__folder__row">
                    <h3>{activeFolder?.activeFolder}</h3>
                    <Link to="/createJob"><Button className=''><h3>+</h3></Button></Link>
                </div>
                <JobApplication applications={applications} ></JobApplication>
            </Col>
        </div>
    )
}

export default JobsList
