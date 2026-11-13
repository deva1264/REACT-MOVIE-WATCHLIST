import { BookmarkX, Clapperboard } from "lucide-react";
import MovieCard from "./MovieCard";

export default function Watchlist({movies, onRemove, onDiscover}) {
  if (!movies.length) return <div className="no-results"><Clapperboard size={30}/><h3>Your watchlist is waiting</h3><p>Save films from the collection and they will appear here.</p><button onClick={onDiscover}>Discover movies</button></div>;
  return <div className="movie-grid">{movies.map(movie=><article className="movie-card" key={movie.id}>
    <div className="poster-wrap"><img src={movie.poster} alt={`${movie.title} poster`} loading="lazy"/></div>
    <div className="movie-info"><div className="movie-title-row"><h3>{movie.title}</h3><span className="rating">★ {movie.rating}</span></div><p>{movie.genre} · {movie.year}</p><button className="add-button remove-button" onClick={()=>onRemove(movie.id)}><BookmarkX size={15}/> Remove</button></div>
  </article>)}</div>;
}
