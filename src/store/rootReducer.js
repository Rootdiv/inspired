import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from '@/features/navigationSlice';
import colorsReducer from '@/features/colorsSlice';

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  colors: colorsReducer,
});
