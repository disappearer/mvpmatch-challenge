import { useState, useEffect } from 'react';
import {
  getFavorites,
  toggleFavorite as toggleFavoriteId,
} from '../util/favorites';

export const useFavorites = () => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    const favoriteIds = getFavorites();
    setFavoriteIds(favoriteIds);
  }, []);

  const toggleFavorite = (imdbId: string) => {
    const updatedFavorites = toggleFavoriteId(imdbId);
    setFavoriteIds(updatedFavorites);
  };

  return {
    favoriteIds,
    toggleFavorite,
  };
};
