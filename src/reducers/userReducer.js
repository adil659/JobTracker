import firebase from 'firebase'
import { db } from '../firebase'


const reducer = (state = null, action) => {

    switch (action.type) {
        case 'SET_CURRENT_USER':
            console.log(`setting user in reducer`)
            return action.data.authUser
        case 'LOGOUT':
            return null
        default:
            return state
    }
}

export const setCurrentUser = (authUser) => {
    return async dispatch => {
        dispatch({
            type: 'SET_CURRENT_USER',
            data: {
                authUser
            }
        })
    }
}

export const signOutUser = () => {
    return async dispatch => {
        dispatch({
            type: 'LOGOUT',
            data: {
                
            }
        })
    }
}


export default reducer