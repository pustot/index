import "purecss/build/pure.css";
import React, { useState, useEffect } from "react";
import "./styles.scss";
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PostCard from "./components/PostCard";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, Button, CardActionArea, CardActions, Icon, Grid } from '@mui/material';
import hanpoly from './assets/hanpoly.png'
import qieyunAutoderiver from './assets/qieyun-autoderiver.png'
import love from './assets/love.png'
import MyAvatar from './assets/my-avatar.jpg'

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

import { ReactComponent as ZhihuLogo } from "./assets/zhihu.svg";
import { SvgIcon } from '@mui/material';
import Zhihu from "./assets/zhihu.png";
import Zhihu4Light from "./assets/zhihu4light.png";
import Zhihu4Dark from "./assets/zhihu4dark.png";
import LinkTree from "./assets/LinkTree.webp";


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const domain = "http://yangcx.tk/";


  return (
    <div>
      
      
      <Container maxWidth="sm">
      <Stack direction="row" justifyContent="flex-end" sx={{p: 3}}>
        <Button variant="outlined" 
              onClick={colorMode.toggleColorMode}
              color="inherit"
              startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}>
          Theme
        </Button>

      </Stack>
      <Stack spacing={2}>
        <Stack direction="row"  spacing={2}>

          <img
            alt="Ethan Yang Chenxi"
            src={MyAvatar}
            width="72" height="72"
          />
        
          <Stack>
            <Typography  variant="h5">
              Chenxi Yang
            </Typography>
            

            <Grid>
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

              <IconButton href="https://www.zhihu.com/people/donew">
                <img alt="Zhihu" src={theme.palette.mode === 'dark' ? Zhihu4Dark : Zhihu4Light} height="24" width="24" />
              </IconButton>

              <IconButton href="https://linktr.ee/smartdramo">
                <img alt="Zhihu" src={LinkTree} height="24" width="24" />
              </IconButton>
            </Grid>

          </Stack>
        </Stack>

        

        <Typography  variant="body1">
            <SchoolIcon/> MSc Computer Science student in <a href="https://www.ed.ac.uk/"> the University of Edinburgh</a> (expected to graduate in Nov. 2022)
        </Typography>
        <Typography  variant="body1">
          <SchoolIcon/> BEng Vehicle Engineering in <a href="https://en.tongji.edu.cn/"> Tongji University</a>
        </Typography>

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