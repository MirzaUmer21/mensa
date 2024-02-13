import React from 'react';
import './gradientButton.scss';
export const GradientButton = ({ text, className, ...props }) => {
  return (
    <button className={`gradientButton ${className}`} {...props}>
      {text}
    </button>
  );
};
