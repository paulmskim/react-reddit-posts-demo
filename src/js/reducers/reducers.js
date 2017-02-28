import { combineReducers } from 'redux';
import posts from './posts';
import subreddits from './subreddits';
import selectedSubreddit from './selectedSubreddit';

const reducers = combineReducers({
  posts,
  subreddits,
  selectedSubreddit,
});

export default reducers;
