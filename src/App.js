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
  const activeFolder = useSelector(state => state.activeFolder)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setCurrentUser(authUser))
      } else {
        signOutUser()
      }
    })

    return () => {
      unsubscribe()
    }
  }, [user, dispatch]);

  useEffect(() => {
    var unsubscribe = null
    console.log(activeFolder)
    if (user != null) {
      if(activeFolder.id != null) {
         unsubscribe = db.collection('users')
        .doc(user?.uid)
        .collection('app_folders')
        .doc(activeFolder?.id)
        .collection('jobs')
        .onSnapshot((snapshot) => {
          dispatch(fireBaseGetApplications(snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          ))
        })
      }
        return () => {
          if (unsubscribe != null) {
              unsubscribe()
          }
        }
    }
    
  }, [user, dispatch, activeFolder])


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