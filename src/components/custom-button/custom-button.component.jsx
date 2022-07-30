import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  isSVGIcon,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${isSVGIcon ? 'svg-icon' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button btn`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
