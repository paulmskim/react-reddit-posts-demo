import fetch from 'isomorphic-fetch';

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const selectSubreddit = subreddit => (
  {
    type: SELECT_SUBREDDIT,
    subreddit,
  }
);

export const invalidateSubreddit = subreddit => (
  {
    type: INVALIDATE_SUBREDDIT,
    subreddit,
  }
);

const requestPosts = subreddit => (
  {
    type: REQUEST_POSTS,
    subreddit,
  }
);

const receivePosts = (subreddit, json) => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: `${hours}:${minutes}:${seconds}`,
  };
};

const fetchPosts = subreddit => (
  (dispatch) => {
    dispatch(requestPosts(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)));
  }
);

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.posts.filter(post => (
    post.subreddit === subreddit
  )).length !== 0;

  if (!posts) {
    return true;
  } else if (state.subreddits[subreddit].isFetching) {
    return false;
  }

  return state.subreddits[subreddit].didInvalidate;
};

export const fetchPostsIfNeeded = subreddit => (
  (dispatch, getState) => (
    shouldFetchPosts(getState(), subreddit) ?
      dispatch(fetchPosts(subreddit)) : Promise.resolve()
  )
);
