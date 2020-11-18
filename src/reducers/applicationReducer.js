import applicationService from '../services/applications'
import firebase from 'firebase'
import { db } from '../firebase'


const reducer = (state = [], action) => {
   
    switch (action.type) {
        case 'INIT_BLOGS':
            return action.data.applications
        case 'CREATE_APPLICATION':
            return state.concat(action.data.application)
        case 'CREATE_LOCAL_APPLICATION':
            return state.concat(action.data.application)
        case 'UPDATE_APPLICATION':
            const newState = state.map((application) => action.data.id != application.id ? application : action.data.updatedApplication)
            return newState
        case 'DELETE_APPLICATION':
            const newStateDelete = state.filter((application) => application.id != action.data.id)
            return newStateDelete
        default:
            return state
    }
}

export const initApplications = () => {
    return async dispatch => {
        const applications = await applicationService.getAll()
        dispatch({
            type: 'INIT_BLOGS',
            data: {
                applications
            }
        })
    }
}

export const fireBaseGetApplications = (applications) => {
    return async dispatch => {
        dispatch({
            type: 'INIT_BLOGS',
            data: {
                applications
            }
        })
    }
}

export const createApplication = (application) => {
    return async dispatch => {
        //const addedApplication = await applicationService.create(application)
        db.collection('jobs').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            ...application
        })
        const addedApplication = {}
        dispatch({
            type: 'CREATEe_APPLICATION',
            data: {
                application: addedApplication
            }
        })
    }
}

export const createLocalApplication = (application) => {
    return async dispatch => {

        dispatch({
            type: 'CREATE_LOCAL_APPLICATION',
            data: {
                application: application
            }
        })
    }
}

export const updateApplication = (id, applicationObject) => {
    return async dispatch => {
        //const updatedApplication = await applicationService.update(id, applicationObject)
        db.collection('jobs').doc(`/${id}`).set(applicationObject)
        const updatedApplication = {}
        dispatch({
            type: 'UPDATEe_APPLICATION',
            data: {
                id,
                updatedApplication
            }
        })
    }
}

export const removeApplication = (id) => {
    return async dispatch => {
        //const deletedApplication = await applicationService.deleteApplication(id)
        db.collection('jobs').doc(`/${id}`).delete()
        const deletedApplication = {}
        dispatch({
            type: 'DELETE_APPLICATION',
            data: {
                deletedApplication,
                id
            }
        })
    }
}

// export const addCommentReq = (blogId, commentObject) => {
//     return async dispatch => {
//         const addedComment = await blogService.addComment(blogId, commentObject)
//         dispatch({
//             type: 'ADD_COMMENT',
//             data: {
//                 addedComment,
//                 blogId
//             }
//         })
//     }
// }

// export const logoutBlog = () => {
//     return {
//         type: 'LOGOUT'
//     }
// }

export default reducer