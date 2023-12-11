import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';

const formData = { email: 'mail@example.com', password: '123456' };

const formValidations = {
  email: [(value) => value.includes('@'), 'Email should have an @'],
  password: [(value) => value.length >= 6, 'Password should have at least 6 characters']
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const { email, password, formState, onInputChange, emailValid, passwordValid, isFormValid } = useForm(
    formData,
    formValidations
  );

  const [formSubmitted, setformSubmitted] = useState();

  const onSubmit = (event) => {
    event.preventDefault();

    setformSubmitted(true);
    if (!isFormValid) return;

    dispatch(startLoginWithEmailPassword(formState));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form className="animate__animated animate__fadeIn animate__faster" onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Mail"
              type="email"
              placeholder="mail@example.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="*******"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sx={!!errorMessage ? { display: 'block' } : { display: 'none' }}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit" disabled={isAuthenticating}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating}>
                <Google>Google</Google>
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
