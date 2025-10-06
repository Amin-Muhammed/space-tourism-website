import React from 'react';
import '../../global.css';
const CustomButton = ({
  children,
  onClick,
  className,
  type = 'button',
  disabled = false,
  ...props
}) => (
  <button
  aria-controls=''
    type={type}
    className={`${className || ''}`} // Apply global + custom classes
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
