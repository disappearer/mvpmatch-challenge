import { ChangeEventHandler, useState } from 'react';
import Movie from '../../components/Movie';
import { Results } from '../../types';
import { search as apiSearch } from '../../util/api';
import { isInFavorites } from '../../util/favorites';
import { useFavorites } from '../hooks';
import './Search.css';

function Search() {
  const [shouldShowResults, setShouldShowResults] = useState(false);
  const [searchText, setSearchText] = useState('');
  console.log('searchText: ', searchText);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Results>([]);
  const [error, setError] = useState<string | null>(null);

  const { favoriteIds, toggleFavorite } = useFavorites();

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value);
  };

  const clearState = () => {
    setError(null);
    setShouldShowResults(false);
  };

  const search: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
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
        setError(err);
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
        </form>
      </div>
      {shouldShowResults && (
        <div className="block mt-6">
          {error ? (
            <div className="is-size-5">{error}</div>
          ) : (
            <>
              <div className="is-size-5">We have found these movies</div>
              <div className="block Search-grid mt-4">
                {results.map((result) => (
                  <Movie
                    key={result.imdbID}
                    movie={result}
                    isFavorite={isInFavorites(result.imdbID, favoriteIds)}
                    toggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Search;
