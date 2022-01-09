import { Chip } from "@material-ui/core";
import axios from "axios"
import { useEffect } from "react";

const Genres = ({
    selectGenres,
    setselectGenres,
    genres,
    setGenres,
    setPage,
    type,
}) => {


    const handleAdd = (genre) => {
        setselectGenres([...selectGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    }

    const handleRemove = (genre) => {
        setselectGenres(
            selectGenres.filter((selected) => selected.id !== genre.id)
        );

        setGenres([...genres, genre]);
        setPage(1);
    };

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_SECRET_CODE}&language=en-US`);

        setGenres(data.genres);
    };

    console.log(genres);


    useEffect(() => {
        fetchGenres();


        return () => {
            setGenres({});
        }

        // eslint-disable-next-line 
    }, []);


    return (
        <div style={{ padding: "6px 0" }}>
            {selectGenres.map((genre) => (
                <Chip
                    label={genre.name}
                    style={{ margin: 2 }}
                    size="small"
                    color="primary"
                    key={genre.id}
                    clickable
                    onDelete={() =>handleRemove(genre)}
                />
            ))}

            {genres.map((genre) => (
                <Chip
                    label={genre.name}
                    style={{ margin: 2 }}
                    size='small'
                    key={genre.id}
                    clickable
                    onClick={() => handleAdd(genre)}
                />
            ))}
        </div>
    )
}

export default Genres