import axios from "axios";
import { BASE_URL } from "../config";

const URL = BASE_URL + "photos"

async function getPhotos(){
    return (await axios.get(URL)).data
}

export default{
    getPhotos
}