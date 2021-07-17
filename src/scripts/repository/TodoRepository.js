import axios from "axios";
import { BASE_URL } from "../config";

const URL = BASE_URL + "todos"

async function getCompletedTodos(){
    let config = {
        params:{
            completed: true
        }
    }
    return (await axios.get(URL, config)).data
}

export default{
    getCompletedTodos
}