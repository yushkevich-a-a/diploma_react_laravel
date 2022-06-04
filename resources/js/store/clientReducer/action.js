import { getRequest } from "../../lib/api";

export const fetchDataClient = () => {
  return { type: 'LOADING_DATA_CLIENT' };
}

export const fetchClientComplete = () => {
  return { type: 'LOADING_CLIENT_COMPLETE' };
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