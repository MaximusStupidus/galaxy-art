import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dummyProducts = [
    { id: 1, name: 'Gold Necklace', price: '$100', img: 'necklace.jpg' },
    { id: 2, name: 'Diamond Ring', price: '$200', img: 'ring.jpg' },
  ];

  return (
    <Box>
      <HeroBanner />
      <Grid container spacing={3} sx={{ p: 4 }}>
        {dummyProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
