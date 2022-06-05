export const fetchDataClient = () => {
  return { type: 'LOADING_DATA_CLIENT' };
}

export const fetchClientComplete = () => {
  return { type: 'LOADING_CLIENT_COMPLETE' };
}

export const fetchLoadingSuccess = (data) => {
  return { type: 'LOADING_CLIENT_SUCCESS', payload: { data } };
}

export const selectSeat = (add_seat) => {
  return { type: 'SELECT_SEAT', payload: { add_seat } };
}

export const removeSeat = (remove_id) => {
  return { type: 'REMOVE_SEAT', payload: { remove_id } };
}

export const fetchErrorCLient = (message) => {
  return { type: 'FETCH_ERROR_CLIENT', payload: { message } };
}

export const fetchErrorCLientComplete = (message) => {
  return { type: 'FETCH_ERROR_CLIENT_COMPLETE' };
}

export const resetStateClient = () => {
  return { type: 'RESET_STATE_CLIENT' };
}