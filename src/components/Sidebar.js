import React from 'react'
import { Button, Col  } from 'react-bootstrap';
import './Sidebar.css'

function SideBar() {
    return (
        <Col xs={3} className="sideBar">

            <Button className="folder_item"><h5>Fall 2020</h5></Button>
            <Button className="folder_item"><h5>Winter 2021</h5></Button>
            <Button className="folder_item"><h5>Summer 2021</h5></Button>
            <Button className="folder_item"><h5>Fall 2021</h5></Button>
            <Button className="folder_item"><h5>Winter 2022</h5></Button>
            <Button className="folder_item"><h5>Summer 2022</h5></Button>
            <Button className='add_folder_button'><h3>+</h3></Button>

        </Col>
    )
}

export default SideBar
