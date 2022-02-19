let favorites = loadFromStorage("favorites") ? loadFromStorage("favorites") : [];

function getFavorites() {
  return [...favorites];
}

function toggleFavorite(user) {
  if (favorites.some(favoriteUser => favoriteUser.login.uuid === user.login.uuid)) favorites = favorites.filter(favoriteUser => favoriteUser.login.uuid !== user.login.uuid);
  else favorites = [...favorites, user];
  saveToStorage("favorites", favorites);
  return favorites;
}

function removeFavorite(userId) {
  favorites = favorites.filter(favoriteUser => favoriteUser.login.uuid !== userId);
  saveToStorage("favorites", favorites);
  return favorites;
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export const favoriteService = {
  getFavorites,
  toggleFavorite,
  removeFavorite
};