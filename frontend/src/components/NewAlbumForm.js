import {useState} from "react";

const NewAlbumForm = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [cover, setCover] = useState('');


    return(
        <form className="create">
            <h3>Add new Workout</h3>
        </form>
    )
}