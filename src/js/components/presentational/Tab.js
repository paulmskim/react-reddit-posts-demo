import React, { PropTypes } from 'react';

const Tab = ({ active, children, onClick }) => {
  const filterTabClass = `filter-tab filter-tab-${children.toLowerCase()}`;

  if (active) {
    return <span className={`${filterTabClass} active`}>{children}</span>;
  }

  return (
    <a
      className={filterTabClass}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
