import React, { useState, useEffect } from "react";
// import "./styles.css";
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PostCard from "./components/PostCard";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';
import hanpoly from './assets/hanpoly.png'
import qieyunAutoderiver from './assets/qieyun-autoderiver.png'
import love from './assets/love.png'
import MyAvatar from './assets/Rebels-6698-192.png'

import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const domain = "http://yangcx.tk/";

  return (
    <div>
      

      <Container maxWidth="sm">
      <Stack direction="row" justifyContent="flex-end">
          <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'end',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,
          }}
          >
            {theme.palette.mode} mode
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
      </Stack>
      <Stack spacing={2}>
        <Stack direction="row"  spacing={2}>

        <Avatar
          alt="Ethan Yang Chenxi"
          src={MyAvatar}
          sx={{ width: 192, height: 192 }}
        />
        
        <Stack>
          <Typography  variant="h4">
            Chenxi Yang
          </Typography>
          <Typography  variant="body1">
            <SchoolIcon/> MSc Computer Science student in the University of Edinburgh (expected to graduate in November 2022)
          </Typography>
          <Typography  variant="body1">
          <SchoolIcon/> BEng Vehicle Engineering in Tongji University
          </Typography>

          <Stack direction="row">
            <IconButton href="https://github.com/EthanYangCX">
              <GitHubIcon/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/yang-chenxi/">
              <LinkedInIcon/>
            </IconButton>
            <IconButton href="https://twitter.com/ethanyangcx">
              <TwitterIcon/>
            </IconButton>
            <IconButton href="https://www.instagram.com/ethanyangcx/">
              <InstagramIcon/>
            </IconButton>
          </Stack>
        </Stack>
        </Stack>

        <Typography  variant="h2">
            Web Apps
        </Typography>

        <PostCard 
          image={qieyunAutoderiver}
          alt="Ethan Yang"
          title="Qieyun Autoderiver with Ttomni Rimduk"
          main="Forked from https://github.com/nk2028/qieyun-autoderiver, with my own
                Ttomni Rimduk (OQeVD8FA), which is used by my own Ttomni language."
          toLink={domain + "qieyun-autoderiver"} 
        />

        <PostCard 
          image={love}
          alt="Ethan Yang"
          title="Blogs of my love with Yuran He"
          main="Recording what we have experienced together."
          toLink={domain + "love"}
        />

        <PostCard 
          image={hanpoly}
          alt="Ethan Yang"
          title="HanPoly"
          main="Find the pronunciation of a Chinese character in multiple languages and dialects."
          toLink={domain + "hanpoly"}
        />

      </Stack>
      </Container>
    </div>
  );
}

export default function AppWithColorToggler() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}