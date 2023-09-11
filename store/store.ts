// store.ts

import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Import your rootReducer
import persistConfig from './persistConfig'; // Import your persistConfig
import {persistStore} from 'redux-persist';
import {useDispatch} from 'react-redux';

const store = configureStore({
  reducer: persistConfig(rootReducer), // Wrap rootReducer with persistConfig
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

const persistor = persistStore(store); // Create a persistor object

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Create a typed useDispatch hook
export const useAppDispatch = () => useDispatch<AppDispatch>();

export {store, persistor};
