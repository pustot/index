import "purecss/build/pure.css";
import React, { useState, useEffect } from "react";
import "./styles.scss";
import { 
  Button, Container, CssBaseline, FormControl, Link as MuiLink, 
  Grid, Icon, IconButton, InputLabel, MenuItem, Select, Stack, Typography,
  Box, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText,
  AppBar, Toolbar
} from '@mui/material';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import FeedIcon from '@mui/icons-material/Feed';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Home from "./pages/Home";
import About from "./pages/About";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App() {
  const [lang, setLang] = React.useState(localStorage.getItem("yangchnx/0.1/lang") || 'en');
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const systemColor = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'dark' : 'light';
  const [mode, setMode] = React.useState(localStorage.getItem("yangchnx/0.1/mode") || systemColor);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        localStorage.setItem("yangchnx/0.1/mode", mode === 'light' ? 'dark' : 'light');
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

  const handleLangChange = (event) => {
    console.log(event.target);
    setLang(event.target.value);
    localStorage.setItem("yangchnx/0.1/lang", event.target.value);
  };

  const getLocaleText = (i18nText, language) => {
    return language in i18nText? i18nText[language] : i18nText["en"];
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsDrawerOpen(open);
  }

  const LanguageSelector = (color) => (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={lang}
      label="Language"
      onChange={handleLangChange}
      sx={{ color: color }}
    >
      <MenuItem value={"en"}>English</MenuItem>
      <MenuItem value={"zh-Hans"}>简体中文</MenuItem>
      <MenuItem value={"zh-Hant"}>繁體中文</MenuItem>
      <MenuItem value={"ja"}>日本語</MenuItem>
      <MenuItem value={"de"}>Deutsch</MenuItem>
      <MenuItem value={"tto-bro"}>b8Q7Z2D.</MenuItem>
      <MenuItem value={"tto"}>mim</MenuItem>
    </Select>
  );

  const IndexDrawer = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>

          <ListItem key="home" disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              {getLocaleText(
                  {"en": "Home", "zh-Hant": "首頁", "zh-Hans": "首页", "tto-bro": "6dF2X8am", "tto": "XoV", 
                   "ja": "ホーム", "de": "Startseite"}, 
                  lang
                  )}
            </ListItemButton>
          </ListItem>

          <ListItem key="about" disablePadding>
            <ListItemButton component={Link} to="/about">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              {getLocaleText(
                  {"en": "About", "zh-Hant": "關於", "zh-Hans": "关于", "tto-bro": "YQFRHOei", "tto": "aCmqSqv", 
                   "ja": "私について", "de": "Über Mich"}, 
                  lang
                  )}
            </ListItemButton>
          </ListItem>

          <ListItem key="blog" disablePadding>
            <ListItemButton component={Link} to="/blog">
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              {getLocaleText(
                  {"en": "Blog", "zh-Hant": "博客", "zh-Hans": "博客", "tto-bro": "b8Q7A", "tto": "bS7Y", 
                   "ja": "ブログ", "de": "Blog"}, 
                  lang
                  )}
            </ListItemButton>
          </ListItem>

          <ListItem key="love" disablePadding>
            <ListItemButton component={MuiLink} href="https://yangchnx.com/love/">
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              {getLocaleText(
                  {"en": "Love", "zh-Hant": "愛", "zh-Hans": "爱", "tto-bro": "Oie3", "tto": "Re", 
                   "ja": "愛", "de": "Liebe"}, 
                  lang
                  )}
            </ListItemButton>
          </ListItem>

      </List>

      <Divider />

      <List>
        
        <ListItem key="theme" disablePadding>
          <ListItemButton
                onClick={colorMode.toggleColorMode}>
                  <ListItemIcon>
                      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </ListItemIcon>
                {getLocaleText(
                  {"en": "Colour Theme", "zh-Hant": "主題", "zh-Hans": "主题", "tto-bro": "Tvo2D8ae", "tto": "VvaH",
                   "ja": "テーマ", "de": "Farbthema"}, 
                  lang
                  )}
          </ListItemButton>
        </ListItem>

        <ListItem key="page-language">
          <ListItemIcon> <LanguageIcon/> </ListItemIcon>
          <LanguageSelector/>
        </ListItem>

      </List>
    </Box>
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>

        <AppBar position="sticky" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
              <Button variant="text" sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none', fontSize: 16 }}
                      component={Link} to="/">{getLocaleText(
                  {"en": "Home", "zh-Hant": "首頁", "zh-Hans": "首页", "tto-bro": "6dF2X8am", "tto": "XoV", 
                   "ja": "ホーム", "de": "Startseite"}, 
                  lang
                  )}</Button>
              <Button variant="text" sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none', fontSize: 16 }}
                      component={Link} to="/about">{getLocaleText(
                  {"en": "About", "zh-Hant": "關於", "zh-Hans": "关于", "tto-bro": "YQFRHOei", "tto": "aCmqSqv", 
                   "ja": "私について", "de": "Über Mich"}, 
                  lang
                  )}</Button>
              <Button variant="text" sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none', fontSize: 16 }}
                      component={Link} to="/blog">{getLocaleText(
                  {"en": "Blog", "zh-Hant": "博客", "zh-Hans": "博客", "tto-bro": "b8Q7A", "tto": "bS7Y", 
                   "ja": "ブログ", "de": "Blog"}, 
                  lang
                  )}</Button>
              <Button variant="text" sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none', fontSize: 16 }}
                      component={MuiLink} href="https://yangchnx.com/love/">{getLocaleText(
                  {"en": "Love", "zh-Hant": "愛", "zh-Hans": "爱", "tto-bro": "Oie3", "tto": "Re", 
                   "ja": "愛", "de": "Liebe"}, 
                  lang
                  )}</Button>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'block', md: 'flex' }, overflow: 'hidden' }}>
              <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <LanguageSelector color='white'/>
            </Box>
          </Toolbar>
          
        </AppBar>
          
          <br/>
    
          <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
            >
              {IndexDrawer()}
            </Drawer>
            
              <Routes>
              <Route path="/" element={<Home lang={lang} />} />
                <Route path="/home" element={<Home lang={lang} />} />
                <Route path="/about" element={<About lang={lang} />} />
              </Routes>

              <br/>
              <br/>
            </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}