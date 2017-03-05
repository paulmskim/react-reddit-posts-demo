import React, { PropTypes } from 'react';
import { selectSubreddit } from '../../actions/actions';
import Tab from './Tab';

const Tabs = ({ subreddits, onClick }) => (
  <div className='filter-tabs'>
    {subreddits.map(subreddit =>
      <Tab
        key={subreddit.subreddit}
        active={subreddit.active}
        onClick={() => onClick(subreddit.subreddit)}
      >
        {subreddit.subreddit}
      </Tab>
    )}
  </div>
);

export default Tabs;
