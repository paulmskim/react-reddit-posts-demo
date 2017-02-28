import { RECEIVE_POSTS } from '../actions/actions';

const posts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return [
        ...state.filter(post => post.subreddit !== action.subreddit),
        ...action.posts,
      ];
    default:
      return state;
  }
};

export default posts;
