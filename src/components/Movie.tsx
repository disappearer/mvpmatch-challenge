import { Movie as MovieType } from '../types';
import './Movie.css';

type Props = {
  movie: MovieType;
  isFavorite: boolean;
  toggleFavorite: (imdbId: string) => void;
};

const Movie: React.FC<Props> = ({
  movie: { imdbID, Poster, Title, Type, Year },
  isFavorite,
  toggleFavorite,
}) => {
  const handleFavoriteClick = () => {
    toggleFavorite(imdbID);
  };

  return (
    <div key={imdbID} className="card">
      <div className="card-image">
        <figure className="image is-3by4">
          <img src={Poster} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">
            <span className="icon mr-1 Favorite" onClick={handleFavoriteClick}>
              <i
                className={`mdi ${
                  isFavorite ? 'mdi-star' : 'mdi-star-outline'
                }`}
              ></i>
            </span>
            {Title}
          </p>
          <p className="subtitle is-6">
            {Type} ({Year})
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
