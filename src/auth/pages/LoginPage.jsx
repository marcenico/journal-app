import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>
      <Grid item className="box-shadow" xs={3} sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>

        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label="Mail" type="email" placeholder="mail@example.com" fullWidth></TextField>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label="Password" type="password" placeholder="*******" fullWidth></TextField>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
