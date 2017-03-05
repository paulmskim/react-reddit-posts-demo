import { connect } from 'react-redux';
import { invalidateSubreddit, fetchPostsIfNeeded } from '../../actions/actions';
import PostList from '../presentational/PostList';

const getPosts = (posts, subreddit) => {
  switch (subreddit) {
    case 'reactjs':
    case 'reduxjs':
    case 'node':
    case 'babeljs':
      return posts.filter(post => post.subreddit === subreddit);
    default:
      throw new Error(`Unknown subreddit: ${subreddit}.`);
  }
};

const mapStateToProps = (state) => (
  {
    posts: getPosts(state.posts, state.selectedSubreddit),
    subreddit: state.selectedSubreddit,
    isFetching: state.subreddits[state.selectedSubreddit].isFetching,
    lastUpdated: state.subreddits[state.selectedSubreddit].lastUpdated,
    subreddits: state.subreddits,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    dispatch,
  }
);

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  {
    ...ownProps,
    ...stateProps,
    onMount: () =>
      Object.keys(stateProps.subreddits).map(subreddit =>
        dispatchProps.dispatch(fetchPostsIfNeeded(subreddit)),
      ),
    onClick: () => {
      dispatchProps.dispatch(invalidateSubreddit(stateProps.subreddit));
      dispatchProps.dispatch(fetchPostsIfNeeded(stateProps.subreddit));
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PostList);
