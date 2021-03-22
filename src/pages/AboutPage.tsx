import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Info</h1>
      <p>Bla bla</p>
      <button
        className="btn"
        onClick={() => history.push('/')}
      >
        Return to todos list
      </button>
    </>
  )
}