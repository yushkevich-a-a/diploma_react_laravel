import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import serviceAdminReducer from './adminReducer/reducer';
import serviceClientReducer from './clientReducer/reducer';

const reducers = combineReducers({
  clientReducer: serviceClientReducer,
  adminReducer: serviceAdminReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;