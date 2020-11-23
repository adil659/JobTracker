import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import applicationReducer from './reducers/applicationReducer'
import userReducer from './reducers/userReducer'
import folderReducer from './reducers/folderReducer'




//import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  applications: applicationReducer,
  authUser: userReducer,
  activeFolder: folderReducer
  //filter: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store