import * as React from 'react';
import type { NextPage } from 'next';

import {
  Container,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  SvgIcon,
  Paper
} from '@mui/material';

import AppIcon from '../public/school_black_24dp.svg';
import Disclaimer from '../src/login/Disclaimer';
import UsernameInput from '../src/login/UsernameInput';
import PasswordInput from '../src/login/PasswordInput';

const Home: NextPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Container
      component='main'
      maxWidth='xs'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Paper>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
          }}
        >
          <SvgIcon
            component={AppIcon}
            color="primary"
            sx={{ fontSize: 100, ml: 'auto', mr: 'auto' }}
          />
          {/* <h1>Student Login</h1> */}
          <Box component='form'>
            <UsernameInput />
            <PasswordInput
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              fullWidth
              type='submit'
              variant='contained'
              sx={{ mt: 1, mb: 2 }}
            >
              Login
            </Button>
            <Link href='#' variant='body2'>
              Forgot password?
            </Link>
          </Box>
          <Disclaimer sx={{ mt: 4 }} />
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
