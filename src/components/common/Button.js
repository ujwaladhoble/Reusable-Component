import React from 'react';

// Reusable Button Component Supports different variants, custom click handlers, and loading state
const Button = ({ variant, onClick, loading, children, disabled }) => {
  const buttonVariant = variant || 'primary';
  const isLoading = loading || false;

  if (!children) {
    console.log('Button component requires children');
  }

  return (
    <button
      className={`btn btn-${buttonVariant}`}
      onClick={onClick}
      disabled={isLoading || disabled}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;