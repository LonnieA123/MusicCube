const AlbumDetails = ({ album }) => {
    return (
        <div className="album-details">
            <h4>{album.title}</h4>
            <p><strong>Artist: </strong>{album.artist}</p>

            <p><strong>Cover: </strong>{album.cover}</p>
            <p>{album.createdAt}</p>
        </div>
    )
}

export default AlbumDetails