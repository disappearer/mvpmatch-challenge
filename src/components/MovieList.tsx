import { ChangeEventHandler, useEffect, useState } from 'react';
import { Movie as MovieType } from '../types';
import { isInFavorites } from '../util/favorites';
import Movie from './Movie/Movie';
enum Sorting {
  None,
  AlphabeticalAscending,
  AlphabeticalDescending,
  NumericAscending,
  NumericDescending,
}

type Props = {
  movies: MovieType[];
  favoriteIds: string[];
  toggleFavorite: (imdbId: string) => void;
};

export const MovieList: React.FC<Props> = ({
  movies,
  favoriteIds,
  toggleFavorite,
}) => {
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const [yearFilterText, setYearFilterText] = useState('');

  const [sorting, setSorting] = useState<Sorting>(Sorting.None);

  useEffect(() => {
    setMovieList(movies);
  }, [movies]);

  const handleYearFilterChanmge: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setYearFilterText(event.target.value);
  };

  useEffect(() => {
    console.log('sortingeffect: ');
    switch (sorting) {
      case Sorting.AlphabeticalAscending: {
        const sortedAlphabeticalAscending = [...movieList].sort(
          (movieA, movieB) => movieA.Title.localeCompare(movieB.Title),
        );
        setMovieList(sortedAlphabeticalAscending);
        break;
      }
      case Sorting.AlphabeticalDescending: {
        const sortedAlphabeticalDescending = [...movieList].sort(
          (movieA, movieB) => movieB.Title.localeCompare(movieA.Title),
        );
        setMovieList(sortedAlphabeticalDescending);
        break;
      }
      case Sorting.NumericAscending: {
        const sortedNumericAscending = [...movieList].sort((movieA, movieB) =>
          movieA.Year.localeCompare(movieB.Year),
        );
        setMovieList(sortedNumericAscending);
        break;
      }
      case Sorting.NumericDescending: {
        const sortedNumericDescending = [...movieList].sort((movieA, movieB) =>
          movieB.Year.localeCompare(movieA.Year),
        );
        setMovieList(sortedNumericDescending);
        break;
      }
    }
  }, [sorting]);

  const handleAlphabeticalSortClick = () => {
    if (sorting === Sorting.AlphabeticalAscending) {
      setSorting(Sorting.AlphabeticalDescending);
    } else {
      setSorting(Sorting.AlphabeticalAscending);
    }
  };

  const handleNumericSortClick = () => {
    if (sorting === Sorting.NumericAscending) {
      setSorting(Sorting.NumericDescending);
    } else {
      setSorting(Sorting.NumericAscending);
    }
  };

  return (
    <>
      <div className="block level">
        <div className="level-left">
          Sort:
          <button className="button ml-5" onClick={handleAlphabeticalSortClick}>
            <span className="icon is-small">
              <span
                className={`mdi mdi-sort-alphabetical-${
                  sorting === Sorting.AlphabeticalAscending
                    ? 'descending'
                    : 'ascending'
                }`}
              />
            </span>
          </button>
          <button className="button ml-1" onClick={handleNumericSortClick}>
            <span className="icon is-small">
              <span
                className={`mdi mdi-sort-numeric-${
                  sorting === Sorting.NumericAscending
                    ? 'descending'
                    : 'ascending'
                }`}
              />
            </span>
          </button>
        </div>
        <div className="level-right is-one-fifth is-size-5 field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Filter by year"
              value={yearFilterText}
              onChange={handleYearFilterChanmge}
              onWheel={(e) => {
                (e.target as HTMLElement).blur();
                setTimeout(function () {
                  (e.target as HTMLElement).focus();
                }, 10);
              }}
            />
          </div>
        </div>
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
