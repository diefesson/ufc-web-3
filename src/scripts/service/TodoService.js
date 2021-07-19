import TodoRepository from "../repository/TodoRepository";
import UserRepository from "../repository/UserRepository";

async function getCompletedTodos() {
    let todos = await TodoRepository.getCompletedTodos()
    let users = await UserRepository.getUsers()
    for (let i in todos) {
        let todo = todos[i]
        todo.user = users.find((u) => u.id == todo.userId)
    }
    return todos
}

export default {
    getCompletedTodos
}