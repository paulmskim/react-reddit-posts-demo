import React from 'react';
import Header from './presentational/Header';
import Tabs from './container/Tabs';
import PostList from './container/PostList';

const App = () => (
  <div className="reddit-posts-app">
    <Header />
    <Tabs />
    <PostList />
  </div>
);

export default App;
