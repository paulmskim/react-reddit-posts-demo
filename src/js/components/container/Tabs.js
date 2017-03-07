import { connect } from 'react-redux';
import { selectSubreddit } from '../../actions/actions';
import Tabs from '../presentational/Tabs';

const mapStateToProps = state => (
  {
    subreddits: Object.keys(state.subreddits).map(subreddit => (
      {
        subreddit,
        active: subreddit === state.selectedSubreddit,
      }
    )),
  }
);

const mapDispatchToProps = dispatch => (
  {
    onClick: subreddit => dispatch(selectSubreddit(subreddit)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tabs);
