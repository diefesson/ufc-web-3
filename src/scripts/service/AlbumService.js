import AlbumRepository from "../repository/AlbumRepository";
import UserRepository from "../repository/UserRepository";

async function getAlbums() {
    let albums = await AlbumRepository.getAlbums()
    let users = new Map()
    for (let i in albums) {
        let album = albums[i]
        if(users[album.userId] == null){
            users[album.userId] = await UserRepository.getUser(album.userId)
        }
        album.user = users[album.userId]
    }
    return albums
}

export default {
    getAlbums
}