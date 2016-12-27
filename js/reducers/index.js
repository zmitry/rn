
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import drawer from './drawer';
import cardNavigation from './cardNavigation';
import user from './user';
import list from './list';

export default combineReducers({
  form,
  drawer,
  user,
  list,
  cardNavigation,

});
