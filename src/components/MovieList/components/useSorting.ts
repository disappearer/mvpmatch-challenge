import { useEffect, useState } from 'react';
import { Movie as MovieType } from '../../../types';

export enum Sorting {
  None,
  AlphabeticalAscending,
  AlphabeticalDescending,
  NumericAscending,
  NumericDescending,
}

export const useSorting = (
  movieList: MovieType[],
  setMovieList: React.Dispatch<React.SetStateAction<MovieType[]>>,
) => {
  const [sorting, setSorting] = useState<Sorting>(Sorting.None);

  /* eslint-disable indent */
  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting]);
  /* eslint-enable indent */

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

  return {
    sorting,
    handleAlphabeticalSortClick,
    handleNumericSortClick,
  };
};
