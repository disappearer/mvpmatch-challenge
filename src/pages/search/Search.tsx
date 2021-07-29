import { ChangeEventHandler, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { Results } from '../../types';
import { search as apiSearch } from '../../util/api';
import { useFavorites } from '../hooks';
import './Search.css';

const Search = () => {
  const [shouldShowResults, setShouldShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState<Results>([]);

  const [requestError, setRequestError] = useState<string | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);

  const { favoriteIds, toggleFavorite } = useFavorites();

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);

    if (inputError && inputText.length) {
      setInputError(null);
    }
  };

  const clearState = () => {
    setRequestError(null);
    setShouldShowResults(false);
  };

  const search: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!searchText.length) {
      return setInputError('Please enter something.');
    }

    clearState();
    setIsLoading(true);

    const trimmedSearchText = searchText.trim();
    setSearchText(trimmedSearchText);

    apiSearch(
      trimmedSearchText,
      (results) => {
        setResults(results);
        setShouldShowResults(true);
        setIsLoading(false);
      },
      (err) => {
        setRequestError(err);
        setShouldShowResults(true);
        setIsLoading(false);
      },
    );
  };

  return (
    <>
      <div className="block is-size-4">Welcome to movie search!</div>
      <div className="block">
        <form onSubmit={search}>
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Find a movie or a show"
                value={searchText}
                onChange={handleSearchChange}
              />
            </div>
            <div className="control">
              <button
                type="submit"
                className={`button ${isLoading ? 'is-loading' : ''}`}
              >
                <span className="icon is-small">
                  <span className="mdi mdi-movie-search"></span>
                </span>
              </button>
            </div>
          </div>
          {inputError && <p className="help is-danger">{inputError}</p>}
        </form>
      </div>
      {shouldShowResults && (
        <div className="block mt-6">
          {requestError ? (
            <div className="is-size-5">{requestError}</div>
          ) : (
            <>
              <div className="block is-size-5">We have found these movies</div>
              <MovieList
                movies={results}
                favoriteIds={favoriteIds}
                toggleFavorite={toggleFavorite}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Search;
