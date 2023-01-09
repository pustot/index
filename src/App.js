import {
    CssBaseline
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "purecss/build/pure.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.scss";

import NavBarAndMenu from "./components/NavBarAndMenu";
import About from "./pages/About";
import BlogArticle from "./pages/BlogArticle";
import BlogList from "./pages/BlogList";
import Home from "./pages/Home";

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function App() {
    const [lang, setLang] = React.useState(localStorage.getItem("yangchnx/0.1/lang") || 'en');

    const systemColor = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
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

    const handleLangMenuItemClick = (tar) => {
        console.log(tar)
        setLang(tar);
        localStorage.setItem("yangchnx/0.1/lang", tar);
    }

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>

                    <NavBarAndMenu handleLangChange={handleLangChange} handleLangMenuItemClick={handleLangMenuItemClick} lang={lang} theme={theme} />

                    <Routes>
                        <Route path="/" element={<Home lang={lang} />} />
                        <Route path="/home" element={<Home lang={lang} />} />
                        <Route path="/about" element={<About lang={lang} />} />
                        <Route path="/blog" element={<BlogList lang={lang} />} />
                        <Route path="/blog/:fileName" element={<BlogArticle lang={lang} />} />
                    </Routes>

                    <br />
                    <br />
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}