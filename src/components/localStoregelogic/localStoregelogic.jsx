export const toggleFavorite = (car) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const isFavorite = favorites.some((favorite) => favorite.id === car.id);

  if (isFavorite) {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== car.id
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  } else {
    const updatedFavorites = [...favorites, car];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }
};

export const isCarSelected = (car) => {
  const favorites = getFavoritesFromLocalStorage();
  return isCarInFavorites(car, favorites);
};

export const getFavoritesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};
const isCarInFavorites = (car, favorites) => {
  return favorites.some((favorite) => favorite.id === car.id);
};

export const toggleFavoriteTest = (car) => {
  const favorites = getFavoritesFromLocalStorage();
  const isFavorite = favorites.some((favorite) => favorite.id === car.id);

  let updatedFavorites;
  if (isFavorite) {
    updatedFavorites = favorites.filter((favorite) => favorite.id !== car.id);
  } else {
    updatedFavorites = [...favorites, car];
  }

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  return updatedFavorites;
};
