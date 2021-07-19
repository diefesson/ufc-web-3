import AlbumRepository from "../repository/AlbumRepository";
import PhotoRepository from "../repository/PhotoRepository";
import UserRepository from "../repository/UserRepository";

async function getAlbums() {
    let albums = await AlbumRepository.getAlbums()
    let users = await UserRepository.getUsers()
    let photos = await PhotoRepository.getPhotos()
    for (let i in albums) {
        let album = albums[i]
        album.user = users.find((u) => u.id == album.userId)
        album.photos = photos.filter((p) => p.albumId == album.id)
    }
    return albums
}

export default {
    getAlbums
}