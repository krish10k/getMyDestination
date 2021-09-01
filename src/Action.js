const API_URL =
  "https://restcountries.eu/rest/v2/all";

export const fetchDataAction = async dispatch => {
  const data = await fetch(API_URL);
  const places = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: places
  });
};

export const toggleFavAction = (places, state, dispatch) => {
  const placesInFavourites = state.favourites.includes(places);
  let dispatchObj = {
    type: "ADD_FAV",
    payload: places
  };
  if (placesInFavourites)
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: state.favourites.filter(fav => fav.id !== places.id)
    };
  return dispatch(dispatchObj);
};
