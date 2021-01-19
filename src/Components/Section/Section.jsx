import React from 'react';
import PropTypes from 'prop-types';

const Section = props => {
  const { title, children } = props;
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

Section.defaultProps = {
  title: '',
};

export default Section;
