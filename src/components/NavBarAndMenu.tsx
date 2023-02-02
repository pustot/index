import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    Link as MuiLink,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Select,
    SelectChangeEvent,
    Toolbar,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import "purecss/build/pure.css";
import * as React from "react";
import { Link } from "react-router-dom";
import { ColorModeContext, LangContext } from "../App";
import { getLocaleText, LangCode, languageCodeToLocale } from "../data/I18n";
import "../styles.scss";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeedIcon from "@mui/icons-material/Feed";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";

export default function NavBarAndMenu(props: {
    theme: Theme;
    langSetter: React.Dispatch<React.SetStateAction<LangCode>>;
}) {
    const { theme, langSetter } = props;
    const colorMode = React.useContext(ColorModeContext);
    const lang = React.useContext(LangContext);

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<(EventTarget & HTMLElement) | undefined>();
    const isLangMenuOpen = Boolean(anchorEl);

    const handleLangMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLangMenuClose = () => {
        setAnchorEl(undefined);
    };

    const toggleDrawer =
        (open: boolean) => (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLDivElement>) => {
            // if (
            //     event.type === "keydown" &&
            //     (event.key === "Tab" || event.key === "Shift")
            // ) {
            //     return;
            // }

            setIsDrawerOpen(open);
        };

    const handleLangChange = (event: SelectChangeEvent) => {
        console.log(event.target);
        langSetter(event.target.value as LangCode);
        localStorage.setItem("yangchnx/0.1/lang", event.target.value);
    };

    const handleLangMenuItemClick = (tar: LangCode) => {
        console.log(tar);
        langSetter(tar);
        localStorage.setItem("yangchnx/0.1/lang", tar);
    };

    const IndexDrawer = () => (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                <ListItem key="nameLogo" disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemText
                            inset
                            primary={getLocaleText(
                                {
                                    "en": "Chenxi Yang",
                                    "zh-Hant": "楊晨曦",
                                    "zh-Hans": "杨晨曦",
                                    "tto-bro": "EerZ T8eHXQea",
                                    "tto": "hnCLo LrnKrHL",
                                    "ja": "楊晨曦",
                                    "de": "Chenxi Yang",
                                    "ko": "양신희",
                                    "fr": "Chenxi Yang",
                                },
                                lang
                            )}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem key="home" disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        {getLocaleText(
                            {
                                "en": "Home",
                                "zh-Hant": "首頁",
                                "zh-Hans": "首页",
                                "tto-bro": "6dn2X8aL",
                                "tto": "XoV",
                                "ja": "ホーム",
                                "de": "Startseite",
                                "ko": "대문",
                                "fr": "Accueil",
                            },
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
                            {
                                "en": "About",
                                "zh-Hant": "關於",
                                "zh-Hans": "关于",
                                "tto-bro": "YQnrHOei",
                                "tto": "aCLqSqv",
                                "ja": "私について",
                                "de": "Über Mich",
                                "ko": "나에 대해서",
                                "fr": "À propos de moi",
                            },
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
                            {
                                "en": "Blog",
                                "zh-Hant": "博客",
                                "zh-Hans": "博客",
                                "tto-bro": "b8QmA",
                                "tto": "bSmY",
                                "ja": "ブログ",
                                "de": "Blog",
                                "ko": "블로그",
                                "fr": "Blog",
                            },
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
                            {
                                "en": "Love",
                                "zh-Hant": "愛",
                                "zh-Hans": "爱",
                                "tto-bro": "Oie3",
                                "tto": "re",
                                "ja": "愛",
                                "de": "Liebe",
                                "ko": "사랑",
                                "fr": "L'amour",
                            },
                            lang
                        )}
                    </ListItemButton>
                </ListItem>
            </List>

            <Divider />

            <List>
                <ListItem key="theme" disablePadding>
                    <ListItemButton onClick={colorMode.toggleColorMode}>
                        <ListItemIcon>
                            {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                        </ListItemIcon>
                        {getLocaleText(
                            {
                                "en": "Colour Theme",
                                "zh-Hant": "主題",
                                "zh-Hans": "主题",
                                "tto-bro": "Tvo2D8ae",
                                "tto": "VvaH",
                                "ja": "テーマ",
                                "de": "Farbthema",
                                "ko": "주제",
                                "fr": "Thème",
                            },
                            lang
                        )}
                    </ListItemButton>
                </ListItem>

                <ListItem key="page-language">
                    <ListItemIcon>
                        {" "}
                        <LanguageIcon />{" "}
                    </ListItemIcon>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={lang}
                        label="Language"
                        onChange={handleLangChange}>
                        {["en", "zh-Hans", "zh-Hant", "ja", "de", "tto-bro", "tto", "ko", "fr"].map(s => (
                            <MenuItem value={s as LangCode}>{languageCodeToLocale(s, s)}</MenuItem>
                        ))}
                    </Select>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ flexGrow: 1, display: "flex", overflow: "auto", }}>
                        <Button
                            variant="text"
                            sx={{
                                color: "white",
                                display: "block",
                                textTransform: "none",
                                fontSize: 16,
                                margin: 1,
                                flexShrink: 0,
                            }}
                            component={Link}
                            to="/">
                            {getLocaleText(
                                {
                                    "en": "Home",
                                    "zh-Hant": "首頁",
                                    "zh-Hans": "首页",
                                    "tto-bro": "6dn2X8aL",
                                    "tto": "XoV",
                                    "ja": "ホーム",
                                    "de": "Startseite",
                                    "ko": "대문",
                                    "fr": "Accueil",
                                },
                                lang
                            )}
                        </Button>
                        <Button
                            variant="text"
                            sx={{
                                color: "white",
                                display: "block",
                                textTransform: "none",
                                fontSize: 16,
                                margin: 1,
                                flexShrink: 0,
                            }}
                            component={Link}
                            to="/about">
                            {getLocaleText(
                                {
                                    "en": "About",
                                    "zh-Hant": "關於",
                                    "zh-Hans": "关于",
                                    "tto-bro": "YQnrHOei",
                                    "tto": "aCLqSqv",
                                    "ja": "私について",
                                    "de": "Über Mich",
                                    "ko": "나에 대해서",
                                    "fr": "À propos de moi",
                                },
                                lang
                            )}
                        </Button>
                        <Button
                            variant="text"
                            sx={{
                                color: "white",
                                display: "block",
                                textTransform: "none",
                                fontSize: 16,
                                margin: 1,
                                flexShrink: 0,
                            }}
                            component={Link}
                            to="/blog">
                            {getLocaleText(
                                {
                                    "en": "Blog",
                                    "zh-Hant": "博客",
                                    "zh-Hans": "博客",
                                    "tto-bro": "b8QmA",
                                    "tto": "bSmY",
                                    "ja": "ブログ",
                                    "de": "Blog",
                                    "ko": "블로그",
                                    "fr": "Blog",
                                },
                                lang
                            )}
                        </Button>
                        <Button
                            variant="text"
                            sx={{
                                color: "white",
                                display: "block",
                                textTransform: "none",
                                fontSize: 16,
                                margin: 1,
                                flexShrink: 0,
                            }}
                            component={MuiLink}
                            href="https://yangchnx.com/love/">
                            {getLocaleText(
                                {
                                    "en": "Love",
                                    "zh-Hant": "愛",
                                    "zh-Hans": "爱",
                                    "tto-bro": "Oie3",
                                    "tto": "re",
                                    "ja": "愛",
                                    "de": "Liebe",
                                    "ko": "사랑",
                                    "fr": "L'amour",
                                },
                                lang
                            )}
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 0,
                            display: { xs: "block", md: "flex" },
                            overflow: "hidden",
                        }}>
                        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                        <IconButton
                            onClick={handleLangMenuClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={isLangMenuOpen ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={isLangMenuOpen ? "true" : undefined}
                            color="inherit">
                            <LanguageIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={isLangMenuOpen}
                            onClose={handleLangMenuClose}
                            onClick={handleLangMenuClose}>
                            {["en", "zh-Hans", "zh-Hant", "ja", "de", "tto-bro", "tto", "ko", "fr"].map(s => (
                                <MenuItem
                                    onClick={() => {
                                        handleLangMenuItemClick(s as LangCode);
                                    }}>
                                    {languageCodeToLocale(s, s)}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            <br />

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {IndexDrawer()}
            </Drawer>
        </div>
    );
}
