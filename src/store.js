import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import applicationReducer from './reducers/applicationReducer'
import userReducer from './reducers/userReducer'



//import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  applications: applicationReducer,
  authUser: userReducer

  //filter: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store