import { BookmarkPlus, Check, Star } from "lucide-react";

export default function MovieCard({movie, isAdded, onAdd}) {
  return <article className="movie-card">
    <div className="poster-wrap">
      <img src={movie.poster} alt={`${movie.title} poster`} loading="lazy" onError={e=>{e.currentTarget.src="https://placehold.co/400x600/24232b/f4eee6?text=Movie";}}/>
      <span className="year-tag">{movie.year}</span>
    </div>
    <div className="movie-info">
      <div className="movie-title-row"><h3>{movie.title}</h3><span className="rating"><Star size={13} fill="currentColor"/> {movie.rating}</span></div>
      <p>{movie.genre}</p>
      <button className={`add-button ${isAdded?"added":""}`} disabled={isAdded} onClick={()=>onAdd(movie)}>
        {isAdded?<><Check size={15}/> Added</>:<><BookmarkPlus size={15}/> Add to watchlist</>}
      </button>
    </div>
  </article>;
}
