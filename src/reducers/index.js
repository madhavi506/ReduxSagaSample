import { combineReducers } from 'redux';
import weatherDataReducer from './weatherDataReducer';
const rootReducer = combineReducers({
   data: weatherDataReducer
});
export default rootReducer;