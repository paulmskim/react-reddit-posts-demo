import subreddit from './subreddit';
import {
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions/actions';

const subreddits = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.subreddit]: subreddit(state[action.subreddit], action),
      };
    default:
      return state;
  }
};

export default subreddits;
