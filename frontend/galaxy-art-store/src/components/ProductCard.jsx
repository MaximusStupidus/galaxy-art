import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={product.img}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1" color="text.secondary">
          {product.price}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 1 }} href={`/product/${product.id}`}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
