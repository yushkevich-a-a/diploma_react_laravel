import { getRequest } from "../../lib/api";

export const fetchAdminData = () => {
  return { type: 'FETCH_ADMIN_DATA' };
}

export const fetchDataSuccess = (data) => {
  return { type: 'FETCH_DATA_SUCCESS', payload: { data } };
}

export const fetchDataError = (message) => {
  return { type: 'FETCH_DATA_ERROR', payload: { message } };
}

export const resetState = () => {
  return { type: 'RESET_STATE' };
}

export const fetchData = () => async (dispatch, getState) => {
  try {
      dispatch(fetchAdminData())
      const data = await getRequest(`api/hall`);
      dispatch(fetchDataSuccess(data))
  } catch (e) {
      dispatch(fetchDataError(e.message))
  }
}