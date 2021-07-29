import { Movie as MovieType } from '../../../types';
import { Sorting as SortingType, useSorting } from './useSorting';

type Props = {
  movieList: MovieType[];
  setMovieList: React.Dispatch<React.SetStateAction<MovieType[]>>;
};

const Sort: React.FC<Props> = ({ movieList, setMovieList }) => {
  const { sorting, handleAlphabeticalSortClick, handleNumericSortClick } =
    useSorting(movieList, setMovieList);

  return (
    <div className="level-left">
      Sort:
      <button className="button ml-5" onClick={handleAlphabeticalSortClick}>
        <span className="icon is-small">
          <span
            className={`mdi mdi-sort-alphabetical-${
              sorting === SortingType.AlphabeticalAscending
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
              sorting === SortingType.NumericAscending
                ? 'descending'
                : 'ascending'
            }`}
          />
        </span>
      </button>
    </div>
  );
};

export default Sort;
