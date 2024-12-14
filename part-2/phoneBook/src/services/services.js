import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = () => {
    const req =  axios.get(url)
    return req.then(response => response.data)
} 

const addPerson = () => {
    const req = axios.post(url, personObject)
    return req.then(response => response.data)
}

export default {

    getAll,
    addPerson

}