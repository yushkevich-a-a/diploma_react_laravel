const initState = {
  loading: false,
  error: null,
  data: [],
  films: [],
}

const serviceAdminReduser = ( state = initState, action ) => {
  switch (action.type) {
    case 'FETCH_ADMIN_DATA':
      return { ...state, loading: true, error: null };
    case 'FETCH_DATA_SUCCESS':
      const { data } = action.payload;
      return { ...state, loading: false, error: null, data };
    case 'FETCH_FILMS_SUCCESS':
      const { films } = action.payload;
      return { ...state, films };
    case 'FETCH_DATA_ERROR':
      const { message } = action.payload;
      return { ...state, loading: false, error: message };
    case 'RESET_STATE':
      return { ...initState };
    default: 
      return { ...state };
  }
}

export default serviceAdminReduser;