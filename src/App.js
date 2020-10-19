import React, {useState, useEffect} from 'react';
import './App.css';
import { Button, Nav, Container, Row, Col,  } from 'react-bootstrap';
import Navbar from './components/Navbar'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { initApplications, createApplication, fireBaseGetApplications} from './reducers/applicationReducer'
import { db, auth } from './firebase'






function App() {
    const dispatch = useDispatch()

    const baseUrl = 'http://localhost:3001'
    const [applications, setApplications] = useState([])

    // useEffect(() => {
    //     dispatch(initApplications())
    // }, [])

    useEffect(() => {
      db.collection('jobs').onSnapshot(snapshot => {
        console.log('snap: ', snapshot.docs)
        dispatch(fireBaseGetApplications(snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))))
      })
    }, [])
    
  return (
    <div className="App">

        <header className="App-header">
        </header>

         <Navbar applications={applications}></Navbar> 

    </div>
  );
}

export default App;