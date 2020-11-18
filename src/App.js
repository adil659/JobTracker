import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { fireBaseGetApplications } from './reducers/applicationReducer'
import { db, auth } from './firebase'
import AddJobApplication from './components/AddJobApplication';
import JobApplicationDetails from './components/JobApplicationDetails';
import Content from './components/Content'
import { currentUser } from './reducers/userReducer'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"


function App() {
  const dispatch = useDispatch()
  
  
  // useEffect(() => {
  //     dispatch(initApplications())
  // }, [])

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       console.log(authUser)
  //       dispatch(currentUser(authUser))
  //     } else {
  //       setUsername(null)
  //     }
  //   })

  //   return () => {
  //     unsubscribe()
  //   }
  // }, [user, username])

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

      <Header ></Header>
      <Router>
        <Switch>
          <Route path="/createjob">
            <AddJobApplication />
          </Route>
          <Route path="/applications/:id">
            <JobApplicationDetails></JobApplicationDetails>
          </Route>
          <Route path="/">
            <Content ></Content>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;