import { ChangeEventHandler, useState } from 'react';
import './Search.css';

type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

type Results = Movie[];

enum ResponseSuccess {
  True = 'True',
  False = 'False',
}

type SuccessResponse = {
  Response: ResponseSuccess.True;
  Search: Results;
  totalResults: string;
};

type ErrorResponse = { Response: ResponseSuccess.False; Error: string };

type Response = SuccessResponse | ErrorResponse;

function Search() {
  const [shouldShowResults, setShouldShowResults] = useState(false);
  const [searchText, setSearchText] = useState('');
  console.log('searchText: ', searchText);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Results>([]);
  const [error, setError] = useState<string | null>(null);

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

    fetch(
      `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${trimmedSearchText}&page=1&r=json`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            'e4b6367955mshe158ddfb218d84ap11538djsn61ee918a2120',
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
        },
      },
    )
      .then((response) => response.json())
      .then((response: Response) => {
        if (response.Response === ResponseSuccess.True) {
          setResults(response.Search);
        } else {
          setError(response.Error);
        }
        setShouldShowResults(true);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setIsLoading(false));
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
                  <div key={result.imdbID} className="card">
                    <div className="card-image">
                      <figure className="image is-3by4">
                        <img src={result.Poster} alt="Placeholder image" />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media-content">
                        <p className="title is-4">{result.Title}</p>
                        <p className="subtitle is-6">
                          {result.Type} ({result.Year})
                        </p>
                      </div>
                    </div>
                  </div>
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
