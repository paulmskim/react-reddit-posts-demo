import React from 'react';
import Header from './Header';
import FilterTabs from './FilterTabs';
import FilteredPostList from './FilteredPostList';

const App = () => (
  <div className="reddit-posts-app">
    <Header />
    <FilterTabs />
    <FilteredPostList />
  </div>
);

export default App;
