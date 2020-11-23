import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'


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
                                <td><Link to={`applications/${application.id}`}>{application.company}</Link></td>
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