import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>

      <p>
        Got to <Link to='/products'>Products</Link>
      </p>
    </>
  );
};
