import axios from "axios"

import {BASE_URL} from "./config.js"

const URL = BASE_URL + "users/"

async function getUser(userId){
    return (await axios.get(URL + userId)).data
}

export default {
    getUser
}