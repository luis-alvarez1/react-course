import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <>
      <div>{productId}</div>
      <Link to='..' relative='path'>
        Back
      </Link>
    </>
  );
};
