const initState = {
  loading: false,
  error: null,
  selectSeats: [],
}

const serviceClientReduser = ( state = initState, action ) => {
  switch (action.type) {
    case 'LOADING_DATA_CLIENT':
      return { ...state, loading: true, error: null };
    case 'LOADING_CLIENT_COMPLETE':
      return { ...state, loading: false,};
    case 'SELECT_SEAT':
      const { add_seat } = action.payload;
      return { ...state, loading: false, error: null, selectSeats: [...state.selectSeats, add_seat ] };
    case 'REMOVE_SEAT':
      const { remove_id } = action.payload;
      const selectSeats = state.selectSeats.filter(item => item.id !==  remove_id)
      return { ...state, loading: false, error: message };
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