import { CssBaseline, PaletteMode } from "@mui/material";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import "purecss/build/pure.css";
import * as React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./styles.scss";

import NavBarAndMenu, { NavItem } from "./components/NavBarAndMenu";
import { I18nText } from "./utils/I18n";
import About from "./pages/About";
import BlogArticle from "./pages/BlogArticle";
import BlogList from "./pages/BlogList";
import Home from "./pages/Home";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FeedIcon from "@mui/icons-material/Feed";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Footer from "./components/Footer";

export default function App() {
    const [lang, setLang] = React.useState<keyof I18nText>(
        (localStorage.getItem("twaqngu/0.1/lang") as keyof I18nText) || ("en" as keyof I18nText)
    );

    const systemColor: string =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const [mode, setMode] = React.useState<string>(localStorage.getItem("twaqngu/0.1/mode") || systemColor);
    const toggleColorMode = () => {
        localStorage.setItem("twaqngu/0.1/mode", mode === "light" ? "dark" : "light");
        setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
    };

    const theme: Theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode as PaletteMode,
                },
            }),
        [mode]
    );

    const langSetter = (tar: keyof I18nText) => {
        setLang(tar);
    };

    const title: I18nText = {
        "eo": "Hejmpaĝo de TvaNiu",
        "zh-Hant": "朵牛的個人主頁",
        "zh-Hans": "朵牛的个人主页",
        "en": "TwaqNgu's Homepage",
        "tto-bro": "Dnr2Zu DaA Ym3HMeH Tvo2X8aL",
        "tto": "XoVhaeG D hnCLo LrnKrHL",
        "ja": "朵牛のホームページ",
        "de": "Homepage von TwaqNgu",
        "ko": "타우(朵牛) 홈페이지",
        "fr": "Page d'Accueil de TwaqNgu",
    };

    const navItems: NavItem[] = [
        {
            name: {
                "eo": "Ĉefpaĝo",
                "zh-Hant": "首頁",
                "zh-Hans": "首页",
                "en": "Home",
                "tto-bro": "6dn2X8aL",
                "tto": "XoV",
                "ja": "ホーム",
                "de": "Startseite",
                "ko": "대문",
                "fr": "Accueil",
            },
            link: "/",
            icon: <HomeIcon />,
        },
        {
            name: {
                "eo": "Pri mi",
                "zh-Hant": "關於",
                "zh-Hans": "关于",
                "en": "About",
                "tto-bro": "YQnrHOei",
                "tto": "aCLqSqv",
                "ja": "私について",
                "de": "Über Mich",
                "ko": "나에 대해서",
                "fr": "À propos de moi",
            },
            link: "/about",
            icon: <InfoIcon />,
        },
        {
            name: {
                "eo": "Blogo",
                "zh-Hant": "博客",
                "zh-Hans": "博客",
                "en": "Blog",
                "tto-bro": "b8QmA",
                "tto": "bSmY",
                "ja": "ブログ",
                "de": "Blog",
                "ko": "블로그",
                "fr": "Blog",
            },
            link: "/blog",
            icon: <FeedIcon />,
        },
        {
            name: {
                "eo": "Amo",
                "zh-Hant": "愛",
                "zh-Hans": "爱",
                "en": "Love",
                "tto-bro": "Oie3",
                "tto": "re",
                "ja": "愛",
                "de": "Liebe",
                "ko": "사랑",
                "fr": "L'amour",
            },
            link: "https://love.twaqngu.com/",
            icon: <FavoriteIcon />,
        },
    ];

    const repoLink = "https://github.com/twaqngu/index";

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HashRouter>
                <NavBarAndMenu
                    theme={theme}
                    toggleColorMode={toggleColorMode}
                    lang={lang}
                    langSetter={langSetter}
                    title={title}
                    navItems={navItems}
                />

                <br />
                <br />
                <br />

                <Routes>
                    <Route path="/" element={<Home lang={lang} />} />
                    <Route path="/home" element={<Home lang={lang} />} />
                    <Route path="/about" element={<About lang={lang} />} />
                    <Route path="/blog" element={<BlogList lang={lang} />} />
                    <Route path="/blog/:fileName" element={<BlogArticle lang={lang} />} />
                </Routes>

                <br />
                <br />

                <Footer repoLink={repoLink} theme={theme} />
            </HashRouter>
        </ThemeProvider>
    );
}
