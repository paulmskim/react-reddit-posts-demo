import { connect } from 'react-redux';
import { selectSubreddit } from '../../actions/actions';
import Tabs from '../presentational/Tabs';

const mapStateToProps = (state, ownProps) => (
  {
    subreddits: Object.keys(state.subreddits).map(subreddit => (
      {
        subreddit,
        active: subreddit === state.selectedSubreddit,
      }
    )),
  }
);

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onClick: (subreddit) => dispatch(selectSubreddit(subreddit)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);
