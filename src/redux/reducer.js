import { combineReducers } from 'redux';
import wisataReducer from './wisata/reducer';

const rootReducer = combineReducers({
  wisata: wisataReducer,
});

export default rootReducer;
