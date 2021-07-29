import { useCallback, useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { Results } from '../../types';
import { getFavorites as apiGetFavorites } from '../../util/api';
import { useFavorites } from '../hooks';

const NO_FAVORITES_MESSAGE = `You have not added any movies or shows to favorites.
 You can do so by clicking the star next to the title in the search results list.`;

const Favorites = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState<Results>([]);
  const [error, setError] = useState<string | null>(null);
  const [areFavoritesLoaded, setAreFavoritesLoaded] = useState(false);

  const { favoriteIds, toggleFavorite } = useFavorites();

  const clearState = () => {
    setError(null);
  };

  const getFavorites = useCallback((favoriteIds: string[]) => {
    clearState();
    setIsLoading(true);

    apiGetFavorites(
      favoriteIds,
      (results) => {
        setResults(results);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
        setIsLoading(false);
      },
    );
  }, []);

  useEffect(() => {
    if (!favoriteIds.length && !results.length) {
      setIsLoading(false);
      return setError(NO_FAVORITES_MESSAGE);
    }

    if (!areFavoritesLoaded) {
      getFavorites(favoriteIds);
      setAreFavoritesLoaded(true);
    }
  }, [areFavoritesLoaded, favoriteIds, results.length, getFavorites]);

  return (
    <>
      <div className="block is-size-4">Your favorites</div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="block mt-6">
          {error ? (
            <div className="is-size-5">{error}</div>
          ) : (
            <MovieList
              movies={results}
              favoriteIds={favoriteIds}
              toggleFavorite={toggleFavorite}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Favorites;
