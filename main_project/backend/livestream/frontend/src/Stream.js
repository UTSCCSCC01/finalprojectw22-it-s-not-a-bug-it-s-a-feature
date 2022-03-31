import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LiveStream from './Livestreams.js';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/home">
        TuneIn.TV
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const mdTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2cc47d',
    },
  },
});

function DashboardContent() {
  const [open, setOpen] = React.useState(true);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box 
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container direction="row" justifyContent="space-evenly" spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
              <Card>
                <CardMedia>
                  <LiveStream />
                  </CardMedia>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Card sx={{display: 'flex'}}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', height: 600}}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography variant="body2">
                            Player1: Hello World!
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12}>
              <Card sx={{ display: 'flex' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' , width: 1220}}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        Stream title
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Streamer name
                      </Typography>
                      <Typography variant="body2">
                        Stream details
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Button variant="outlined" href="#streamer-profile">
                      Follow
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}