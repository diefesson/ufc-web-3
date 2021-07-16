import axios from "axios";
import { BASE_URL } from "@/scripts/config.js"

const URL = BASE_URL + "posts/"

async function getPosts() {
    return (await axios.get(URL)).data
}

export default {
    getPosts
}