import { createSlice } from '@reduxjs/toolkit';
import { getRequest } from "../../lib/api";

const initialState = {
  loading: false,
  error: null,
  data: [],
  films: [],
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    fetchData (state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataComplete (state) {
      state.loading = false;
    },
    fetchDataSuccess (state, action) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchFilmsSuccess (state, action) {
      state.loading = false;
      state.error = null;
      state.films = action.payload;
    },
    fetchDataError (state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchErrorComplete (state) {
      state.error = null;
    },
    updateAllData (state, action) {
        state.films = action.payload.films;
        state.data = action.payload.hallData;
      },
    resetState (state) {
      state.data = [];
      state.films = [];
    }
  }
})

export const {
  fetchData,
  updateAllData,
  fetchDataComplete,
  fetchDataSuccess,
  fetchFilmsSuccess,
  fetchDataError,
  fetchErrorComplete,
  resetState
} = adminSlice.actions;

export const fetchAdminData = () => async (dispatch) => {
  try {
    dispatch(fetchData());
    const data = await getRequest(`/hall`);
    dispatch(fetchDataSuccess(data.data));
  } catch (e) {
      dispatch(fetchDataError(e.message));
  }
}

export const fetchFilms = () => async (dispatch) => {
  try {
    const data = await getRequest(`/film`);
    dispatch(fetchFilmsSuccess(data));
} catch (e) {
    dispatch(fetchDataError(e.message));
}
}

export default adminSlice.reducer;