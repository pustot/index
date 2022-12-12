import "purecss/build/pure.css";
import React, { useState, useEffect } from "react";
import "./styles.scss";
import PostCard from "./components/PostCard";
import { 
  Button, Container, CssBaseline, FormControl, 
  Grid, Icon, IconButton, InputLabel, MenuItem, Select, Stack, Typography 
} from '@mui/material';

import hanpoly from './assets/hanpoly.png'
import qieyunAutoderiver from './assets/qieyun-autoderiver.png'
import love from './assets/love.png'
import MyAvatar from './assets/my-avatar.jpg'
import khmerStarter from './assets/khmer-starter.png'
import cantoneseFlashcard from './assets/cantonese-flashcard.png'
import wordLookuper from './assets/word-lookuper.png'

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import Zhihu4Light from "./assets/zhihu4light.png";
import Zhihu4Dark from "./assets/zhihu4dark.png";
import LinkTree from "./assets/LinkTree.webp";


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [lang, setLang] = React.useState('en');

  const handleLangChange = (event) => {
    setLang(event.target.value);
  };

  const getLocaleText = (i18nText, language) => {
    return language in i18nText? i18nText[language] : i18nText["en"];
  }

  const domain = "http://yangcx.tk/";


  return (
    <div>
      
      
      <Container maxWidth="sm">
      <Stack spacing={4} px={2} pb={4}>
        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{p: 3}}>
          <Button variant="outlined" 
                onClick={colorMode.toggleColorMode}
                color="inherit"
                sx={{textTransform: "none"}}
                startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}>
            {getLocaleText(
              {"en": "Theme", "zh-tra": "主題", "zh-sim": "主题", "tto-bro": "Tvo2D8ae", "tto": "VvaH"}, 
              lang
              )}
          </Button>

          <FormControl >
            <InputLabel id="demo-simple-select-label">{getLocaleText(
              {"en": "Language", "zh-tra": "語言", "zh-sim": "语言", "tto-bro": "Zei2ZeiH", "tto": "SRHM"}, 
              lang
              )}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              label="Language"
              onChange={handleLangChange}
            >
              <MenuItem value={"en"}>English</MenuItem>
              <MenuItem value={"zh-tra"}>繁體中文</MenuItem>
              <MenuItem value={"zh-sim"}>简体中文</MenuItem>
              <MenuItem value={"tto-bro"}>b8Q7Z2D.</MenuItem>
              <MenuItem value={"tto"}>mim</MenuItem>
            </Select>
          </FormControl>

        </Stack>
      
        <Stack direction="row"  spacing={2}>

          <img
            alt="Ethan Yang Chenxi"
            src={MyAvatar}
            width="72" height="72"
          />
        
          <Stack>
            <Typography  variant="h5">
            {getLocaleText(
              {"en": "Chenxi Yang", "zh-tra": "楊晨曦", "zh-sim": "杨晨曦", "tto-bro": "EeRZ T8eHXQea", "tto": "hFCmo mAFKRHm"}, 
              lang
            )}
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
            <SchoolIcon/> {getLocaleText(
              {"en": "MSc Computer Science in ", 
              "zh-tra": "計算機科學理學碩士，畢業於", 
              "zh-sim": "计算机科学理学硕士，毕业于", 
              "tto-bro": "Yae3CFRH3Yde AF7X8Q7A Sd2X8Q7A T8eLAG8d2, bemZeih Oei ", 
              // "tto": "Fab RhSe"
            }, 
              lang
            )} 
            <a href="https://www.ed.ac.uk/">
            {getLocaleText(
              {"en": " the University of Edinburgh ", 
              "zh-tra": "愛丁堡大學", 
              "zh-sim": "爱丁堡大学", 
              "tto-bro": "Oae3D8aH D8RQ3X8Q7A", 
              // "tto": "Fab RhSe"
            }, 
              lang
            )}
            </a> 
        </Typography>
        <Typography  variant="body1">
          <SchoolIcon/> {getLocaleText(
              {"en": "BEng Vehicle Engineering in ", 
              "zh-tra": "車輛工程工學學士，畢業於", 
              "zh-sim": "车辆工程工学学士，毕业于", 
              "tto-bro": "BeRSeRZ3 YFZD8leLZ YFZX8Q7A X8Q7AG8d2, bemZeih Oei ", 
              // "tto": "Fab RhSe"
            }, 
              lang
            )} 
          <a href={getLocaleText(
              {"en": "https://en.tongji.edu.cn/", 
              "zh-tra": "https://www.tongji.edu.cn/", 
              "zh-sim": "https://www.tongji.edu.cn/",
              "de": "https://de.tongji.edu.cn/"
            }, 
              lang
            )}>
          {getLocaleText(
              {"en": "Tongji University", 
              "zh-tra": "同濟大學", 
              "zh-sim": "同济大学", 
              "tto-bro": "D8FZ9ae3 D8RQ3X8Q7A", 
              // "tto": "Fab RhSe"
            }, 
              lang
            )}
          </a>
        </Typography>

        <Typography  variant="h2">
        {getLocaleText(
              {"en": "Web Apps", "zh-tra": "Web 應用", "zh-sim": "Web 应用", "tto-bro": "Fab OeZ3Ee7Z3", "tto": "Fab RhSe"}, 
              lang
            )}
        </Typography>

        <PostCard 
          image={love}
          alt="Ethan Yang"
          title={getLocaleText(
            {"en": "Blogs of my love with Yuran He", 
            "zh-tra": "與然小姐姐的戀愛記錄", 
            "zh-sim": "与然小姐姐的恋爱记录", 
            "tto-bro": "Eei2 X87 Zei2HMeaH DaA SvaH3Oie3 Yd3Se7A", 
            // "tto": "Fab RhSe"
          }, 
            lang
          )}
          main="Recording what we have experienced together."
          toLink={domain + "love"}
        />

        <PostCard 
          image={cantoneseFlashcard}
          alt="Cantonese Flashcard Screenshot"
          title={getLocaleText(
            {"en": "Cantonese Flashcard", 
            "zh-tra": "粵語字卡", 
            "zh-sim": "粤语字卡",
            "tto": "vmv ARD"
          }, 
            lang
          )}
          main="Display flashcards with Chinese characters and Jyutping with your comfortable speed."
          toLink={domain + "cantonese-flashcard"}
        />

        <PostCard 
          image={khmerStarter}
          alt="Ethan Yang"
          title={getLocaleText(
            {"en": "Khmer Starter", 
            "zh-tra": "高棉語啟輝器", 
            "zh-sim": "高棉语启辉器", 
            "tto-bro": "YRFVeaHZei2 Aae2XFeAQe3", 
            "tto": "AVRa Aae"
          }, 
            lang
          )}
          main="Split Khmer sentences into words and then look up its romanization, pronunciation and meaning (later) in Wiktionary."
          toLink={domain + "khmer-starter"}
        />

        <PostCard 
          image={hanpoly}
          alt="Ethan Yang"
          title={getLocaleText(
            {"en": "HanPoly", 
            "zh-tra": "漢諸", 
            "zh-sim": "汉诸", 
            "tto-bro": "XRH3Tei", 
            "tto": "XRHhoSe"
          }, 
            lang
          )}
          main="Find the pronunciation of a Chinese character in multiple languages and dialects."
          toLink={domain + "hanpoly"}
        />

        <PostCard 
          image={wordLookuper}
          alt="Screenshot of Word Lookup"
          title={getLocaleText(
            {"en": "Word Lookup", 
            "zh-tra": "查詞", 
            "zh-sim": "查词"
          }, 
            lang
          )}
          main="Look up the word in Wiktionary with some additional functionalities."
          toLink={domain + "word-lookuper"}
        />

        <PostCard 
          image={qieyunAutoderiver}
          alt="Ethan Yang"
          title={getLocaleText(
            {"en": "Qieyun Autoderiver with Ttomni Rimduk", 
            "zh-tra": "切韻音系自動推導器（含丌通語音讀）", 
            "zh-sim": "切韵音系自动推导器（含丌通语音读）", 
            "tto-bro": "camFH3 OQeVX8ae3 98e3D8FZ2 moeD8RF3AQe3 (X8iV Y8dmFZZei2 OQeVD8FA)", 
            // "tto": "Fab RhSe"
          }, 
            lang
          )}
          main="Forked from https://github.com/nk2028/qieyun-autoderiver, with my own
                Ttomni Rimduk (OQeVD8FA), which is used by my own Ttomni language."
          toLink={domain + "qieyun-autoderiver"} 
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