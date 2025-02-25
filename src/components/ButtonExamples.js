import React from 'react';
import Button from './common/Button';

// Different Example of buttons 
// different variants and loading state
const ButtonExamples = () => {
  return (
    <div className="my-3">
      <Button variant="primary" onClick={() => alert('Primary Clicked')}>
        Primary
      </Button>
      <Button variant="secondary" loading className="ms-2">
        Loading...
      </Button>
      <Button variant="outline-primary" onClick={() => alert('Outline Clicked')}>
        Outline
      </Button>
    </div>
  );
};

export default ButtonExamples;
