import React, { PropTypes } from 'react';

const Post = ({ id, ups, title, url }) => (
  <li className={'post post-' + id}>
    <span className='post-ups'>
      {ups}
    </span>
    <a
      href={url}
      className='post-url'
    >
      {title}
    </a>
  </li>
);

Post.PropTypes = {
  id: PropTypes.string.isRequired,
  ups: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Post;
