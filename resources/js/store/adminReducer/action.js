import { getRequest } from "../../lib/api";

export const fetchAdminData = () => {
  return { type: 'FETCH_ADMIN_DATA' };
}

export const fetchDataSuccess = (data) => {
  return { type: 'FETCH_DATA_SUCCESS', payload: { data } };
}

export const fetchFilmsSuccess = (films) => {
  return { type: 'FETCH_FILMS_SUCCESS', payload: { films } };
}

export const fetchDataError = (message) => {
  return { type: 'FETCH_DATA_ERROR', payload: { message } };
}

export const resetState = () => {
  return { type: 'RESET_STATE' };
}

export const fetchData = () => async (dispatch, getState) => {
  try {
      dispatch(fetchAdminData());
      const data = await getRequest(`/hall`);
      dispatch(fetchDataSuccess(data));
  } catch (e) {
      dispatch(fetchDataError(e.message));
  }
}

export const fetchFilms = () => async (dispatch, getState) => {
  try {
      const data = await getRequest(`/film`);
      dispatch(fetchFilmsSuccess(data));
  } catch (e) {
      dispatch(fetchDataError(e.message));
  }
}