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
    // Prepare global states: 
    // `lang` for I18n languages
    // `theme` for color themes (dark or light)
    const [lang, setLang] = React.useState<keyof I18nText>(
        (localStorage.getItem("pustot/0.1/lang") as keyof I18nText) || ("en" as keyof I18nText)
    );

    const systemColor: string =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    // 获取 localStorage 中的 mode 和时间戳
    let storedMode = localStorage.getItem("pustot/0.1/mode");
    let storedTimestamp = localStorage.getItem("pustot/0.1/timestamp");

    // 检查时间戳是否在一小时内
    const isWithinHour = (timestamp: number | null) => {
        if (!timestamp) return false;
        const hourInMillis = 60 * 60 * 1000; // 一小时的毫秒数
        return Date.now() - Number(timestamp) <= hourInMillis;
    };

    // 如果时间戳超过一小时，则恢复到系统颜色
    if (storedTimestamp && !isWithinHour(Number(storedTimestamp))) {
        storedMode = systemColor;
    }

    const [mode, setMode] = React.useState<string>(storedMode || systemColor);

    const toggleColorMode = () => {
        // 保存设置的时间戳
        const timestamp = Date.now().toString();
        localStorage.setItem("pustot/0.1/mode", mode === "light" ? "dark" : "light");
        localStorage.setItem("pustot/0.1/timestamp", timestamp);
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

    // Prepare items and subpages used in NavBar, SideDrawer and Footer
    const title: I18nText = {
        "zh-Hans": "浦司图的个人主页",
        "zh-Hant": "浦司圖的個人主頁",
        "en": "Pusto's Homepage",
        "ja": "浦司図のホームページ",
        "de": "Homepage von Pusto",
        "ko": "포사도 홈페이지",
        "ko-Han": "浦司圖 홈페이지",
        "eo": "Hejmpaĝo de Pusto",
        "fr": "Page d'Accueil de Pusto",
        "vi": "Trang cá nhân của Phổ Ti Đồ",
        "vi-Han": "張個人𧶮浦司圖",
        "es": "Página personal de Pusto",
        "tto-bro": "Dnr2Zu DaA Ym3HMeH Tvo2X8aL",
        "tto": "XoVhaeG D hnCLo LrnKrHL",
    };

    const navItems: NavItem[] = [
        {
            name: {
                "zh-Hant": "首頁",
                "zh-Hans": "首页",
                "en": "Home",
                "ja": "ホーム",
                "de": "Startseite",
                "ko": "대문",
                "ko-Han": "大門",
                "eo": "Ĉefpaĝo",
                "fr": "Accueil",
                "vi": "Trang chủ",
                "vi-Han": "張主",
                "es": "Inicio",
                "tto-bro": "6dn2X8aL",
                "tto": "XoV",
            },
            link: "/",
            icon: <HomeIcon />,
        },
        {
            name: {
                "zh-Hant": "關於",
                "zh-Hans": "关于",
                "en": "About",
                "ja": "私について",
                "de": "Über Mich",
                "ko": "나에 대해서",
                "ko-Han": "나에 對해서",
                "eo": "Pri mi",
                "fr": "À propos de moi",
                "vi": "Về tôi",
                "vi-Han": "𡗅碎",
                "es": "Sobre mí",
                "tto-bro": "YQnrHOei",
                "tto": "aCLqSqv",
            },
            link: "/about",
            icon: <InfoIcon />,
        },
        {
            name: {
                "zh-Hant": "博客",
                "zh-Hans": "博客",
                "en": "Blog",
                "ja": "ブログ",
                "de": "Blog",
                "ko": "블로그",
                "ko-Han": "블로그",
                "eo": "Blogo",
                "fr": "Blog",
                "vi": "Blog",
                "vi-Han": "Blog",
                "es": "Blog",
                "tto-bro": "b8QmA",
                "tto": "bSmY",
            },
            link: "/blog",
            icon: <FeedIcon />,
        },
        {
            name: {
                "zh-Hant": "愛",
                "zh-Hans": "爱",
                "en": "Love",
                "ja": "愛",
                "de": "Liebe",
                "ko": "사랑",
                "ko-Han": "사랑",
                "eo": "Amo",
                "fr": "L'amour",
                "vi": "Tình yêu",
                "vi-Han": "情𢞅",
                "es": "Amor",
                "tto-bro": "Oie3",
                "tto": "re",
            },
            link: "https://love.pustot.com/",
            icon: <FavoriteIcon />,
        },
    ];

    const repoLink = "https://github.com/pustot/index";

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
