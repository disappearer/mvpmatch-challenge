const FAVORITES_STORAGE_KEY = 'favorites';

export const getFavorites = () => {
  const favoritesStorageValue = localStorage.getItem(FAVORITES_STORAGE_KEY);
  const favorites: string[] = favoritesStorageValue
    ? JSON.parse(favoritesStorageValue)
    : [];
  return favorites;
};

const addToFavorites = (imdbIdToAdd: string, favorites: string[]) => {
  const updatedFavorites = [...favorites, imdbIdToAdd];
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedFavorites));

  return updatedFavorites;
};

const removeFromFavorites = (imdbIdToRemove: string, favorites: string[]) => {
  const filteredFavorites = favorites.filter(
    (imdbId) => imdbId !== imdbIdToRemove,
  );

  localStorage.setItem(
    FAVORITES_STORAGE_KEY,
    JSON.stringify(filteredFavorites),
  );

  return filteredFavorites;
};

export const isInFavorites = (imdbId: string, favorites: string[]) => {
  return favorites.includes(imdbId);
};

export const toggleFavorite = (imdbId: string) => {
  const favorites = getFavorites();

  return isInFavorites(imdbId, favorites)
    ? removeFromFavorites(imdbId, favorites)
    : addToFavorites(imdbId, favorites);
};
