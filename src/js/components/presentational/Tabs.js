import React, { PropTypes } from 'react';
import Tab from './Tab';

const Tabs = ({ subreddits, onClick }) => (
  <div className="filter-tabs">
    {subreddits.map(subreddit => (
      <Tab
        key={subreddit.subreddit}
        active={subreddit.active}
        onClick={() => onClick(subreddit.subreddit)}
      >
        {subreddit.subreddit}
      </Tab>
    ))}
  </div>
);

Tabs.propTypes = {
  subreddits: PropTypes.arrayOf(PropTypes.shape({
    subreddit: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tabs;
