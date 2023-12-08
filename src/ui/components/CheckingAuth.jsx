import { CircularProgress, Grid } from '@mui/material';
import React from 'react';

export const CheckingAuth = () => {
  return (
    <Grid
      alignContent="center"
      container
      direction="column"
      justifyContent="center"
      spacing={0}
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>
      <Grid justifyContent="center" item>
        <CircularProgress color="warning"></CircularProgress>
      </Grid>
    </Grid>
  );
};
