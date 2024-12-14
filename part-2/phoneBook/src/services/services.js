import axios from 'axios'

const url = 'http://localhost:3001/persons'

const deletePerson = (person) => {

    const req = axios.delete(`${url}/${person.id}`)
    return req.then(response => response.data)

}
const getAll = () => {
    const req =  axios.get(url)
    return req.then(response => response.data)
} 

const addPerson = (personObject) => {
    const req = axios.post(url, personObject)
    return req.then(response => response.data)
}

const updateInformation = (id , newPerson) => {
    const req = axios.put(`${url}/${id}`, newPerson)
    return req.then(response => response.data)
}

export default {

    getAll,
    addPerson,
    deletePerson,
    updateInformation

}