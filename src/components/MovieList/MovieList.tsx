import { ChangeEventHandler, useEffect, useState } from 'react';
import { Movie as MovieType } from '../../types';
import { isInFavorites } from '../../util/favorites';
import Movie from '../Movie/Movie';
import Filter from './components/Filter';
import Sort from './components/Sort';

type Props = {
  movies: MovieType[];
  favoriteIds: string[];
  toggleFavorite: (imdbId: string) => void;
};

const MovieList: React.FC<Props> = ({
  movies,
  favoriteIds,
  toggleFavorite,
}) => {
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const [yearFilterText, setYearFilterText] = useState('');

  useEffect(() => {
    setMovieList(movies);
  }, [movies]);

  const handleYearFilterChanmge: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setYearFilterText(event.target.value);
  };

  return (
    <>
      <div className="block level">
        <Sort movieList={movieList} setMovieList={setMovieList} />
        <Filter
          yearFilterText={yearFilterText}
          onChange={handleYearFilterChanmge}
        />
      </div>
      <div className="block Search-grid mt-4">
        {movieList
          .filter((movie) => movie.Year.includes(yearFilterText))
          .map((movie) => (
            <Movie
              key={movie.imdbID}
              movie={movie}
              isFavorite={isInFavorites(movie.imdbID, favoriteIds)}
              toggleFavorite={toggleFavorite}
            />
          ))}
      </div>
    </>
  );
};

export default MovieList;
