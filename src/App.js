import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Nav, Container, Row, Col, } from 'react-bootstrap';
import Navbar from './components/Navbar'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { initApplications, createApplication, fireBaseGetApplications } from './reducers/applicationReducer'
import { db, auth } from './firebase'






function App() {
  const dispatch = useDispatch()

  const baseUrl = 'http://localhost:3001'
  const [applications, setApplications] = useState([])
  const [email, setEmail] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false)

  // useEffect(() => {
  //     dispatch(initApplications())
  // }, [])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser)
        setUser(authUser)

      } else {
        setUsername(null)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [user, username])

  useEffect(() => {
    db.collection('jobs').onSnapshot(snapshot => {
      console.log('snap: ', snapshot.docs)
      dispatch(fireBaseGetApplications(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))))
    })
  }, [])


  const signUp = (event) => {
    event.preventDefault()

    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username
        })
      })
      .catch((error) => alert(error.message))

    setOpen(false)

  }
  return (
    <div className="App">

      <header className="App-header">
      </header>

      <Navbar applications={applications}></Navbar>

    </div>
  );
}

export default App;