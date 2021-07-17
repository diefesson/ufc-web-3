import axios from "axios";
import { BASE_URL } from "../config.js";

const URL = BASE_URL + "albums"

async function getAlbums(){
    return (await axios.get(URL)).data
}

export default{
    getAlbums
}