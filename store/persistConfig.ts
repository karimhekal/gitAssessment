// persistConfig.ts

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root', // Storage key
  storage: AsyncStorage, // Use AsyncStorage for React Native
  whitelist: ['data'], // Specify which reducers to persist
};

export default (reducer: any) => persistReducer(persistConfig, reducer);
