import firebase from 'firebase'
import { db } from '../firebase'


const reducer = (state = [], action) => {

    switch (action.type) {
        case 'CURRENT_USER':
            console.log(`setting user in reducer`)
            return action.data.authUser
        case 'LOGOUT':
            return null
        default:
            return state
    }
}

export const currentUser = (authUser) => {
    return async dispatch => {
        dispatch({
            type: 'CURRENT_USER',
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