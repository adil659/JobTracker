import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { fireBaseGetApplications } from './reducers/applicationReducer'
import { db, auth } from './firebase'
import AddJobApplication from './components/AddJobApplication';
import JobApplicationDetails from './components/JobApplicationDetails';
import Content from './components/Content'
import { setCurrentUser, signOutUser } from './reducers/userReducer'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"


function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.authUser)

  // useEffect(() => {
  //     dispatch(initApplications())
  // }, [])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setCurrentUser(authUser))
      } else {
        signOutUser(null)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (user) {
      db.collection('jobs').onSnapshot(snapshot => {
        dispatch(fireBaseGetApplications(snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })).filter((item) => {
          return item.user_id === user?.uid
        })
        ))
      })
    }
  }, [user, dispatch])


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