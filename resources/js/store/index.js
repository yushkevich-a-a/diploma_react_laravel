import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import serviceAdminReduser from './adminReducer/reducer';
import serviceClientReduser from './clientReducer/reducer';

const reducers = combineReducers({
  clientReduser: serviceClientReduser,
  adminReduser: serviceAdminReduser,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;