import { Results, Response, ResponseSuccess } from '../types';

export const search = (
  searchText: string,
  onSuccess: (results: Results) => void,
  onError: (error: string) => void,
) => {
  fetch(
    `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${searchText}&page=1&r=json`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'e4b6367955mshe158ddfb218d84ap11538djsn61ee918a2120',
        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
      },
    },
  )
    .then((response) => response.json())
    .then((response: Response) => {
      if (response.Response === ResponseSuccess.True) {
        onSuccess(response.Search);
      } else {
        onError(response.Error);
      }
    })
    .catch((err) => {
      onError(err);
    });
};

export const getFavorites = (
  favoriteIds: string[],
  onSuccess: (results: Results) => void,
  onError: (error: string) => void,
) => {
  Promise.all(
    favoriteIds.map((imdbId) =>
      fetch(
        `https://movie-database-imdb-alternative.p.rapidapi.com/?i=${imdbId}&r=json`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key':
              'e4b6367955mshe158ddfb218d84ap11538djsn61ee918a2120',
            'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          },
        },
      ).then((response) => response.json()),
    ),
  )
    .then((results) => {
      onSuccess(results);
    })
    .catch((error) => {
      onError(error);
    });
};
