import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import applicationReducer from './reducers/applicationReducer'


//import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  applications: applicationReducer,

  //filter: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store