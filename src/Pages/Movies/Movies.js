import axios from "axios"
import { useEffect, useState } from "react"
import Genres from "../../components/Genres";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenres from "../../hooks/useGeners";

const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numberofPages, setnumberofPages] = useState();
    const [selectGenres, setselectGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectGenres);


    const fetchMovie = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_SECRET_CODE}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreforURL}`);

        // console.log(data);
        setContent(data.results);
        setnumberofPages(data.total_pages)
    };

    useEffect(() => {
        fetchMovie();
        // eslint-disable-next-line 
    }, [page, genreforURL]);

    return (
        <div>
            <span className="pageTitle"> Movies</span>
            <Genres
                type="movie" 
                selectGenres={selectGenres} 
                setselectGenres={setselectGenres} 
                genres={genres} 
                setGenres={setGenres}
                setPage= {setPage}
            />
            <div className="trending">
                {content &&
                    content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type="movie"
                            vote_average={c.vote_average}
                        />))}
            </div>
            {numberofPages > 1 &&
                <CustomPagination setPage={setPage} numberofPages={numberofPages} />
            }

        </div>
    )
}

export default Movies;