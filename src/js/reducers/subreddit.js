import {
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from '../actions/actions';

const subreddit = (state = {
  isFetching: false,
  didInvalidate: false,
  lastUpdated: false,
}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true,
      };
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default subreddit;
