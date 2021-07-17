import PostRepository from "../repository/PostRepository.js"
import UserRepository from "../repository/UserRepository.js"

async function getPosts() {
    let users = new Map()
    let posts = await PostRepository.getPosts()
    for (let i in posts) {
        let post = posts[i]
        if (users[post.userId] == null) {
            users[post.userId] = await UserRepository.getUser(post.userId)
        }
        post.user = users[post.userId]
    }
    return posts
}

export default {
    getPosts
}