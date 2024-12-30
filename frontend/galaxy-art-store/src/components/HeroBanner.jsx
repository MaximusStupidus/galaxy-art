import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        height: '50vh',
        bgcolor: 'secondary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        px: 2,
      }}
    >
      <Typography variant="h1">Galaxy Art Store</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Discover unique and luxurious semi-precious jewelry pieces.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 3 }}
        href="/"
      >
        Shop Now
      </Button>
    </Box>
  );
};

export default HeroBanner;
