import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { width } from '@mui/system';
import ReactPlayer from 'react-player'
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageInputSmall, VirtualizedMessageList, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#home">
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
  const toggleDrawer = () => {
    setOpen(!open);
  };

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
                  <ReactPlayer 
                    className='stream'
                    url= 'https://cdn.discordapp.com/attachments/881566442770808842/953573390101401660/test_Trim_4_Trim.mp4'
                    // Use database query here (?)
                    width='100%'
                    height='100%'
                    controls= {true}
                    // Enter whatever stream here, this is just a placeholder
                />
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