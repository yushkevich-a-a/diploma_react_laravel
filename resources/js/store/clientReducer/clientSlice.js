import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: JSON.parse(localStorage.getItem('clientData')) || null,
  selectSeats: JSON.parse(localStorage.getItem('selectSeats')) || [],
  dateSeans: JSON.parse(localStorage.getItem('dateSeans')) || null,
}

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    fetchDataClient (state) {
      state.loading = true;
      state.error = null;
    },
    fetchClientComplete (state) {
      state.loading = false;
    },
    fetchLoadingSuccess (state, action) {
      localStorage.setItem('clientData', JSON.stringify(action.payload));
      state.loading = false;
      state.loading = null;
      state.data = action.payload;
    },
    selectSeat (state, action) {
      state.selectSeats.push(action.payload);
      console.log(state.selectSeats);
      localStorage.setItem('selectSeats', JSON.stringify(state.selectSeats));
      state.loading = false;
      state.loading = null;
    },
    removeSeat (state, action) {
      const selectSeatsUpdated = state.selectSeats.filter(item => item.number_seat !== action.payload)
      localStorage.setItem('selectSeats', JSON.stringify(selectSeatsUpdated));
      state.selectSeats = selectSeatsUpdated;
    },
    fetchErrorCLient (state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchErrorCLientComplete (state) {
      state.error = null;
    },
    fetchSelectDate (state, action) {
      localStorage.setItem('dateSeans', JSON.stringify(action.payload));
      state.dateSeans = action.payload;
    },
    resetStateClient (state) {
      state = {...initialState};
    },
  }
});

export const {
  fetchDataClient,
  fetchClientComplete,
  fetchLoadingSuccess,
  selectSeat,
  removeSeat,
  fetchErrorCLient,
  fetchErrorCLientComplete,
  fetchSelectDate,
  resetStateClient
} = clientSlice.actions;

export default clientSlice.reducer;

