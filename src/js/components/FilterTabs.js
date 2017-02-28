import { connect } from 'react-redux';
import { selectSubreddit } from '../actions/actions';
import Tabs from './Tabs';

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

const FilterTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);

export default FilterTabs;
