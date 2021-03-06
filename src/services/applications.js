import axios from 'axios'
const baseUrl = 'http://localhost:3002/applications'


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const update = async (id, newObject) => {
  
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

const deleteApplication = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

// const addComment = (blogId, commentObject) => {
//   console.log("reached addComment request")
//   const newObject = {
//     commentObject,
//     blogId
//   }
//   const request = axios.post(`${baseUrl}/${blogId}/comments`, newObject)
//   return request.then(response => response.data)
// }


export default { getAll, create, update, deleteApplication }