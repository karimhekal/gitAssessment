// reducers/index.ts

import {combineReducers} from 'redux';
import dataReducer from './dataSlice'; // Import your data slice reducer
// Import other reducers as needed

const rootReducer = combineReducers({
  data: dataReducer,
  // Add other reducers here
});

export default rootReducer;
