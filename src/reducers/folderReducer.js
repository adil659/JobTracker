
const reducer = (state=null, action) => {

    switch(action.type) {
        case "SET_CURRENT_FOLDER":
            console.log(`current folder set: ${action.data.activeFolder}`)
            return action.data
        case "REMOVE_CURRENT_FOLDER":
            return null
        default:
            return state
    }
} 


export const setActiveFolder = (activeFolder) => {
    return async dispatch => {
        dispatch({
            type: 'SET_CURRENT_FOLDER',
            data: {
                activeFolder: activeFolder.folder,
                id: activeFolder.id
            }
        })
    }
    
} 


export const removeActiveFolder = () => {
    return async dispatch => {
        dispatch({
            type: 'REMOVE_CURRENT_FOLDER',
            data: {
                remove: 'remove'
            }
        })
    }
} 


export default reducer