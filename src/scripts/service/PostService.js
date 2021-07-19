import PostRepository from "../repository/PostRepository.js"
import UserRepository from "../repository/UserRepository.js"
import CommentRepository from "../repository/CommentRepository.js"

async function getPosts() {
    // Because the number of necessary HTTP requests
    // In this case it's more efficient to download all data in
    // single requests
    let users = await UserRepository.getUsers()
    let comments = await CommentRepository.getComments()
    let posts = await PostRepository.getPosts()
    for (let i in posts) {
        let post = posts[i]
        post.user = users.find((u) => u.id == post.userId)
        post.comments = comments.filter((c) => c.postId == post.id)
    }
    return posts
}

export default {
    getPosts
}