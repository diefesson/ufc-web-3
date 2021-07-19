import axios from "axios"
import { BASE_URL } from "../config.js"

const URL = BASE_URL + "comments"

async function getPostComments(postId) {
    let config = {
        params:{
            postId: postId
        }
    }
    console.log(postId)
    return (await axios.get(URL, config)).data
}

async function getComments(){
    return(await axios.get(URL)).data
}

export default {
    getPostComments,
    getComments
}