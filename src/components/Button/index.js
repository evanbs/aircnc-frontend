import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ modifier, children, ...remainingData }) => (
  <button
    className={'button' + (modifier ? ' button--' + modifier : '')}
    {...remainingData}
  >
    {children}
  </button>
);

Button.propTypes = {
  modifier: PropTypes.string,
  children: PropTypes.any,
  remainingData: PropTypes.any
};

Button.defaulProps = {
  modifier: false
};

export default Button;
