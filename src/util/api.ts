import { Results, Response, ResponseSuccess } from '../types';

const API_KEY = process.env.REACT_APP_RAPID_API_KEY as string;
const API_HOST = process.env.REACT_APP_RAPID_API_HOST as string;

export const search = (
  searchText: string,
  onSuccess: (results: Results) => void,
  onError: (error: string) => void,
) => {
  fetch(`https://${API_HOST}/?s=${searchText}&page=1&r=json`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST,
    },
  })
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
      fetch(`https://${API_HOST}/?i=${imdbId}&r=json`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
      }).then((response) => response.json()),
    ),
  )
    .then((results) => {
      onSuccess(results);
    })
    .catch((error) => {
      console.log('error: ', error);
      onError(error);
    });
};
