import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { currentViewReducer } from './current-view';
import { emojiReducer } from './emoji';


export default combineReducers({
  routing: routerReducer,
  views: currentViewReducer,
  emoji: emojiReducer
});
