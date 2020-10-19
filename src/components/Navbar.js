import React, { useState, useEffect } from 'react';
import { Button, Nav, Container, Row, Col } from 'react-bootstrap';
import Content from './Content'
import AddJobApplication from './AddJobApplication';
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom"
import JobApplicationDetails from './JobApplicationDetails';


const Navbar = ({ applications }) => {
    const [activePage, setActivePage] = useState('')

    const handleCreateJob = (eventKey, event) => {
        console.log(eventKey)
        setActivePage('AddJobApplication')
    }

    return (
        <div>

            <Nav
                
                id="navbar"
            >
                <Nav.Item>
                    <Nav.Link href="/">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/createjob">Create Job Post</Nav.Link>
                </Nav.Item>
                
            </Nav>

            <Router>

                <Switch>
                    
                    <Route path="/createjob">
                        <AddJobApplication />
                    </Route>
                    <Route path="/applications/:id">
                    <JobApplicationDetails></JobApplicationDetails>
                    </Route>
                    <Route path="/">
                    <Content applications={applications}></Content>
                    </Route>
                </Switch>

            </Router>
            


        </div>
    )
}

export default Navbar