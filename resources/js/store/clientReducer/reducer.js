const initState = {
  loading: false,
  error: null,
  data: [],
  films: [],
}

const serviceClientReduser = ( state = initState, action ) => {
  switch (action.type) {
    case 'LOADING_DATA':
      return { ...state, loading: true, error: null };
    case 'LOADING_COMPLETE':
      return { ...state, loading: false,};
    case 'SELECT_DATE':
      const { date } = action.payload;
      return { ...state, loading: false, error: null, data };
    case 'FETCH_ERROR_CLIENT':
      const { message } = action.payload;
      return { ...state, loading: false, error: message };
    case 'FETCH_ERROR_CLIENT_COMPLETE':
      return { ...state, error: null };
    case 'RESET_STATE':
      return { ...initState };
    default: 
      return { ...state };
  }
}

export default serviceAdminReduser;