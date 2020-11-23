import React, { useState, useEffect } from 'react'
import { Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { setActiveFolder } from '../reducers/folderReducer'
import { db } from '../firebase'
import './Sidebar.css'

function SideBar() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.authUser)
    //const activeFolder = useSelector(state => state.activeFolder)
    //const [activeFolder, setActiveFolder] = useState('')
    const [folders, setFolders] = useState([])

    useEffect(() => {
        console.log(`entering sidebar: user: ${user}`)
        if (user != null) {
            db.collection('users')
                .doc(user?.uid)
                .collection('app_folders')
                .onSnapshot((snapshot) => {
                    console.log('folders snapshot')
                    console.log(snapshot.docs)

                    setFolders(snapshot.docs.map(doc => (
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    ))

                    )
                })

        }

    }, [user])

    useEffect(() => {
            dispatch(setActiveFolder({
                id: folders[0]?.id,
                folder: folders[0]?.name
            }))
        
    }, [folders, dispatch])

    const folderClick = (event) => {
        console.log(`folder clicked ${event.target.innerText} id:  ${event.target.value}`)
        const folder = event.target.innerText
        const id = event.target.value
        //console.log(event.target.innerText.toStrin)
        dispatch(setActiveFolder({
            id,
            folder
        }))
    }

    return (
        <Col xs={3} className="sideBar">
            {
                folders.map(folder => (
                <Button className="folder_item" onClick={folderClick} value={folder.id} key={folder.id}>{folder.name}</Button>
                ))
            }

            <Button className='add_folder_button'><h3>+</h3></Button>

        </Col>
    )
}

export default SideBar
