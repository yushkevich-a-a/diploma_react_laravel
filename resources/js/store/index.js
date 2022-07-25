
import { configureStore } from "@reduxjs/toolkit";
import clientReducer from './clientReducer/clientSlice';
import adminReducer from './adminReducer/adminSlice';

export default configureStore({
  reducer: {
  client: clientReducer,
  admin: adminReducer,
  }
});