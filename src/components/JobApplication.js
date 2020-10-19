import React, {useEffect, useState} from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'


const JobApplication = () => {
    const applications = useSelector(state => state.applications)
    
    const formatted_applications = applications.map((application) => application.applied ? {...application, color: 'green'} : {...application, color: 'red'})

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Applied</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        formatted_applications.map((application, i) => (

                            
                            <tr key={i}>                                
                                <td>{i}</td>
                                <td><a href={`applications/${application.id}`}>{application.company}</a></td>
                                <td>{application.position}</td>
                                <td style={{backgroundColor: application.color}}></td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default JobApplication