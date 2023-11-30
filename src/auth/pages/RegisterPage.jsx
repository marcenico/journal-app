import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';

const formData = {
  email: '',
  password: '',
  displayName: ''
};

export const RegisterPage = () => {
  const { displayName, email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="John"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="mail@example.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="*******"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth onClick={onSubmit}>
                Create
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
