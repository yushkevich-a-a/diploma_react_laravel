// import { getRequest } from "../../lib/api";

// export const fetchData = () => {
//   return { type: 'FETCH_DATA' };
// }

// export const fetchDataComplete = () => {
//   return { type: 'FETCH_DATA_COMPLETE' };
// }

// export const fetchDataSuccess = (data) => {
//   return { type: 'FETCH_DATA_SUCCESS', payload: { data } };
// }

// export const fetchFilmsSuccess = (films) => {
//   return { type: 'FETCH_FILMS_SUCCESS', payload: { films } };
// }

// export const fetchDataError = (message) => {
//   return { type: 'FETCH_ERROR', payload: { message } };
// }

// export const fetchErrorComplete = (message) => {
//   return { type: 'FETCH_ERROR_COMPLETE' };
// }

// export const resetState = () => {
//   return { type: 'RESET_STATE' };
// }

// export const fetchAdminData = () => async (dispatch, getState) => {
//   try {
//       dispatch(fetchData());
//       const data = await getRequest(`/hall`);
//       dispatch(fetchDataSuccess(data.data));
//   } catch (e) {
//       dispatch(fetchDataError(e.message));
//   }
// }

// export const fetchFilms = () => async (dispatch, getState) => {
//   try {
//       const data = await getRequest(`/film`);
//       dispatch(fetchFilmsSuccess(data));
//   } catch (e) {
//       dispatch(fetchDataError(e.message));
//   }
// }