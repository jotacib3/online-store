import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Page = forwardRef(({ children, title, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Page.defaultProps = {
  title: '',
};

export default Page;
