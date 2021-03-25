import axios from 'axios'

export default axios.create({
    baseURL: "https://frozen-reef-96768.herokuapp.com/",
    responseType: "json"
})