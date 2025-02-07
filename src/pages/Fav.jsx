import "../css/Fav.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Fav(){
    const { favorites } = useMovieContext();

    if (favorites) {
        return (
          <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
              {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          </div>
        );
      }
      
    return (<div className="favorites-empty">
        <h2>
            No Favorite movies yet 🫤
        </h2>
        <p>
            Heart the movies you like and they will appear here 😊
        </p>

    </div>
);}

export default Fav;