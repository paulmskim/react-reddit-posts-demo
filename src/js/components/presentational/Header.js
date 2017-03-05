import React from 'react';

const Header = () => (
  <div className="header">
    <h1 className="title">React Reddit Posts Demo</h1>
    <p className="desc">
      A demo that asynchronously fetches the latest Reddit posts by
      subreddit and displays them. Refresh to update the post list and
      post data.
    </p>
  </div>
);

export default Header;
