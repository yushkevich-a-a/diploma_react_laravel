const initState = {
  loading: false,
  error: null,
  data: JSON.parse(localStorage.getItem('clientData')) || null,
  selectSeats: JSON.parse(localStorage.getItem('selectSeats')) || [],
  dateSeans: '05-06-2022',
}

const serviceClientReduser = ( state = initState, action ) => {
  switch (action.type) {
    case 'LOADING_DATA_CLIENT':
      return { ...state, loading: true, error: null };
    case 'LOADING_CLIENT_COMPLETE':
      return { ...state, loading: false,};
    case 'LOADING_CLIENT_SUCCESS':
      const { data } = action.payload;
      localStorage.setItem('clientData', JSON.stringify(data));
      return { ...state, loading: false, error: null, data};
    case 'SELECT_SEAT':
      const { add_seat } = action.payload;
      const newSelectSeats = [...state.selectSeats, add_seat ]
      localStorage.setItem('selectSeats', JSON.stringify(newSelectSeats));
      return { ...state, loading: false, error: null, selectSeats: newSelectSeats };
    case 'REMOVE_SEAT':
      const { remove_id } = action.payload;
      const selectSeats = state.selectSeats.filter(item => item.number_seat !== remove_id)
      localStorage.setItem('selectSeats', JSON.stringify(selectSeats))
      return { ...state, loading: false, error: null, selectSeats };
    case 'FETCH_ERROR_CLIENT':
      const { message } = action.payload;
      return { ...state, loading: false, error: message };
    case 'FETCH_ERROR_CLIENT_COMPLETE':
      return { ...state, error: null };
    case 'RESET_STATE_CLIENT':
      return { ...initState };
    default: 
      return { ...state };
  }
}

export default serviceClientReduser;