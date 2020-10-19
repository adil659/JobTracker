import { Button, Nav, Container, Row, Col,  } from 'react-bootstrap';
import React from 'react'
import JobApplication from './JobApplication';


const Content = ({applications}) => {

    return (
        <div>
            <Container fluid className="content__container">
          <Row>

            <Col xs={3} id="side__navbar" className="justify-content-md-stretch content__col">
              
                <h6 className="list_item">Click me!</h6>
                <h6 className="list_item">Click me!</h6>
                <h6 className="list_item">Click me!</h6>
                <h6 className="list_item">Click me!</h6>
                <h6 className="list_item">Click me!</h6>
              
            </Col>

            <Col className="content__col">
              <Row className="content__row">
                <h1>Keep track of all your resumes! 🚀</h1>
              </Row>
              <JobApplication applications={applications} ></JobApplication>
            </Col>

          </Row>

        </Container>
        </div>
    )
}

export default Content