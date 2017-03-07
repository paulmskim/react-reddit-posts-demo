import React, { Component, PropTypes } from 'react';
import Post from './Post';

class PostList extends Component {
  componentDidMount() {
    const { onMount } = this.props;
    onMount();
  }

  render() {
    const {
      posts,
      subreddit,
      isFetching,
      lastUpdated,
      onClick,
    } = this.props;

    const postListClass = isFetching ?
      `post-list post-list-${subreddit} post-list-is-fetching` :
      `post-list post-list-${subreddit}`;

    return (
      <div className="posts">
        {
          lastUpdated &&
            <div className="last-updated">
              Last Updated: {lastUpdated}
            </div>
        }
        {
          isFetching &&
            <span className="is-fetching">
              Loading...
            </span>
        }
        {
          !isFetching &&
            <a
              href="#"
              className="refresh-button"
              onClick={(e) => {
                e.preventDefault();
                onClick();
              }}
            >
              Refresh Posts
            </a>
        }
        <ul className={postListClass}>
          {posts.map(post => (
            <Post
              key={post.id}
              id={post.id}
              ups={post.ups}
              title={post.title}
              url={post.url}
            />
          ))}
        </ul>
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    ups: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  subreddit: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
};

export default PostList;
