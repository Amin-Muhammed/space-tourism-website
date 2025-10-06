import React from 'react';

const PageContentConainer = ({ children, className }) => {
  return <div className={className || ''}>{children}</div>;
};

export default PageContentConainer;
