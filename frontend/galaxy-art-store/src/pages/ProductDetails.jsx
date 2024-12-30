import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details for {id}</h1>
      <p>Details about the product will go here.</p>
    </div>
  );
};

export default ProductDetails;
