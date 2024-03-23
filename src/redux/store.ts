import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
import weatherSlice from './slices/weatherSlice';

const rootReducer = combineReducers({
  weatherSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store;
export type AppDispath = AppStore['dispatch']