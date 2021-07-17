import TodoRepository from "../repository/TodoRepository";
import UserRepository from "../repository/UserRepository";

async function getCompletedTodos() {
    let todos = await TodoRepository.getCompletedTodos()
    let users = new Map()
    for (let i in todos) {
        let todo = todos[i]
        if (users[todo.userId] == null) {
            users[todo.userId] = await UserRepository.getUser(todo.userId)
        }
        todo.user = users[todo.userId]
    }
    return todos
}

export default {
    getCompletedTodos
}