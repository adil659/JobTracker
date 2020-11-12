import { Button, Nav, Container, Row, Col } from 'react-bootstrap';
import React from 'react'
import SideBar from './Sidebar'
import JobsList from './JobsList'
import './Content.css'


const Content = ({ applications }) => {

  return (
    <div className='content'>
      <Container fluid className="content__container">
        <Row>
          <SideBar></SideBar>
          <JobsList applications={applications}></JobsList>
        </Row>

      </Container>
    </div>
  )
}

export default Content