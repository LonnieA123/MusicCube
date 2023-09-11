import {useEffect, useState} from "react";
import AlbumDetails from "../components/AlbumDetails";

const Home = () => {

    const [albums, setAlbums] = useState(null)

    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await fetch('/api/albums')
            const json = await response.json();

            if (response.ok){
                setAlbums(json)
            }
        }
        fetchAlbums()
        },[])

    return(
        <div className="home">
            <div className="albums">
                {albums && albums.map((album) => (
                    <AlbumDetails key={album._id} album={album}/>
                    ))}
            </div>
        </div>
    )
}

export default Home