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
            const newState = state.map((application) => action.data.id !== application.id ? application : action.data.updatedApplication)
            return newState
        case 'DELETE_APPLICATION':
            const newStateDelete = state.filter((application) => application.id !== action.data.id)
            return newStateDelete
        case 'CLEAR_APPLICATIONS':
            return []
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

export const createApplication = (userId, activeFolder, application) => {
    return async dispatch => {
        //const addedApplication = await applicationService.create(application)
        db.collection('users').doc(userId).collection('app_folders').doc(activeFolder.id).collection('jobs').add({
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

export const updateApplication = (userId, activeFolder, appId, applicationObject) => {
    return async dispatch => {
        //const updatedApplication = await applicationService.update(id, applicationObject)
        db.collection('users').doc(userId)
        .collection('app_folders').doc(activeFolder.id)
        .collection('jobs').doc(`/${appId}`).set(applicationObject)
        const updatedApplication = {}
        dispatch({
            type: 'UPDATEe_APPLICATION',
            data: {
                appId,
                updatedApplication
            }
        })
    }
}

export const removeApplication = (userId, activeFolder, appId) => {
    return async dispatch => {
        //const deletedApplication = await applicationService.deleteApplication(id)
        db.collection('users').doc(userId)
        .collection('app_folders').doc(activeFolder.id)
        .collection('jobs').doc(`/${appId}`).delete()
        //const deletedApplication = {}
        dispatch({
            type: 'DELETE_APPLICATION',
            data: {
                appId
            }
        })
    }
}

export const clearApplications = () => {
    return async dispatch => {
        //const deletedApplication = await applicationService.deleteApplication(id)
        //const deletedApplication = {}
        console.log('clearing apps')
        dispatch({
            type: 'CLEAR_APPLICATIONS'
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