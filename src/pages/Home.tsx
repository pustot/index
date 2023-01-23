import "purecss/build/pure.css";
import * as React from "react";
import PostCard from "../components/PostCard";
import "../styles.scss";

import { Container, Grid, IconButton, Link as MuiLink, Stack, Typography } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import SchoolIcon from "@mui/icons-material/School";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "@mui/material/styles";
import { I18nText } from "../data/I18n";
import { SiDuolingo } from "react-icons/si"

export default function Home(props: { lang: keyof I18nText }) {
    const { lang } = props;
    const theme = useTheme();

    const getLocaleText = (i18nText: I18nText, language: keyof I18nText) => {
        return language in i18nText ? i18nText[language] : i18nText["en"];
    };

    const domain = "https://yangchnx.com/";
    const picFolder = process.env.PUBLIC_URL + "pic/";

    return (
        <div>
            <Container maxWidth="md">
                <Stack spacing={4} px={2} pb={4}>
                    <Stack direction="row" spacing={2}>
                        <img alt="Ethan Yang Chenxi" src={picFolder + "my-avatar.jpg"} width="72" height="72" />

                        <Stack>
                            <Typography variant="h5">
                                {getLocaleText(
                                    {
                                        "en": "Chenxi Yang",
                                        "zh-Hant": "楊晨曦",
                                        "zh-Hans": "杨晨曦",
                                        "tto-bro": "EeRZ T8eHXQea",
                                        "tto": "hFCmo mRFKRHm",
                                        "ja": "楊　晨曦（よう　しんぎ）",
                                        "de": "Chenxi Yang",
                                    },
                                    lang
                                )}
                            </Typography>

                            <Grid>
                                <IconButton href="https://github.com/yangchnx">
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton href="https://www.linkedin.com/in/yang-chenxi/">
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton href="https://twitter.com/yangchnx">
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton href="https://www.instagram.com/yangchnx">
                                    <InstagramIcon />
                                </IconButton>

                                <IconButton href="https://www.zhihu.com/people/donew">
                                    <img
                                        alt="Zhihu"
                                        src={
                                            theme.palette.mode === "dark"
                                                ? picFolder + "zhihu4dark.png"
                                                : picFolder + "zhihu4light.png"
                                        }
                                        height="24"
                                        width="24"
                                    />
                                </IconButton>

                                <IconButton href="https://www.duolingo.com/profile/yangchnx">
                                    <SiDuolingo />
                                </IconButton>

                                {/* <IconButton href="https://linktr.ee/smartdramo">
                                    <img alt="Linktree" src={picFolder + "LinkTree.webp"} height="24" width="24" />
                                </IconButton> */}

                            </Grid>
                        </Stack>
                    </Stack>

                    <Typography variant="body1">
                        <SchoolIcon />{" "}
                        {getLocaleText(
                            {
                                "en": "MSc Computer Science at ",
                                "zh-Hant": "",
                                "zh-Hans": "",
                                "tto-bro": "Yae3CFRH3Yde AF7X8Q7A Sd2X8Q7A T8eLAG8d2, bemZeih Oei ",
                                // "tto": "Fab RhSe"
                                "ja": "",
                                "de": "MSc Informatik in ",
                            },
                            lang
                        )}
                        <MuiLink href="https://www.ed.ac.uk/">
                            {getLocaleText(
                                {
                                    "en": " the University of Edinburgh ",
                                    "zh-Hant": "愛丁堡大學",
                                    "zh-Hans": "爱丁堡大学",
                                    "tto-bro": "Oae3D8aH D8RQ3X8Q7A",
                                    // "tto": "Fab RhSe"
                                    "ja": "エディンバラ大学",
                                    "de": "Universität Edinburgh",
                                },
                                lang
                            )}
                        </MuiLink>
                        {getLocaleText(
                            {
                                "en": "",
                                "zh-Hant": " 計算機科學理學碩士",
                                "zh-Hans": " 计算机科学理学硕士",
                                "ja": "　情報工学修士（理学）",
                            },
                            lang
                        )}
                    </Typography>
                    <Typography variant="body1">
                        <SchoolIcon />{" "}
                        {getLocaleText(
                            {
                                "en": "BEng Vehicle Engineering at ",
                                "zh-Hant": "",
                                "zh-Hans": "",
                                "tto-bro": "BeRSeRZ3 YFZD8leLZ YFZX8Q7A X8Q7AG8d2, bemZeih Oei ",
                                // "tto": "Fab RhSe"
                                "ja": "",
                                "de": "BEng Fahrzeugtechnik in ",
                            },
                            lang
                        )}
                        <MuiLink
                            href={getLocaleText(
                                {
                                    "en": "https://en.tongji.edu.cn/",
                                    "zh-Hant": "https://www.tongji.edu.cn/",
                                    "zh-Hans": "https://www.tongji.edu.cn/",
                                    "de": "https://de.tongji.edu.cn/",
                                },
                                lang
                            )}
                        >
                            {getLocaleText(
                                {
                                    "en": "Tongji University",
                                    "zh-Hant": "同濟大學",
                                    "zh-Hans": "同济大学",
                                    "tto-bro": "D8FZ9ae3 D8RQ3X8Q7A",
                                    // "tto": "Fab RhSe"
                                    "ja": "同済大学",
                                    "de": "Tongji-Universität",
                                },
                                lang
                            )}
                        </MuiLink>
                        {getLocaleText(
                            {
                                "en": "",
                                "zh-Hant": " 車輛工程工學學士",
                                "zh-Hans": " 车辆工程工学学士",
                                // "tto": "Fab RhSe"
                                "ja": "　自動車工程学士（工学）",
                                "de": "",
                            },
                            lang
                        )}
                    </Typography>

                    <Typography variant="h2">
                        {getLocaleText(
                            {
                                "en": "Web Apps",
                                "zh-Hant": "Web 應用",
                                "zh-Hans": "Web 应用",
                                "tto-bro": "Fab OeZ3Ee7Z3",
                                "tto": "Fab RhSe",
                                "ja": "Webアプリ",
                                "de": "Webanwendungen",
                            },
                            lang
                        )}
                    </Typography>

                    <Grid>
                        <IconButton href={domain + "love"}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton href={domain + "cantonese-flashcard"}>粵</IconButton>
                        <IconButton href={domain + "khmer-starter"}>ក</IconButton>
                        <IconButton href={domain + "hanpoly"}>漢</IconButton>
                        <IconButton href={domain + "three-body"}>
                            <ScatterPlotIcon />
                        </IconButton>
                        <IconButton href={domain + "word-lookuper"}>
                            <TravelExploreIcon />
                        </IconButton>
                        <IconButton href={domain + "qieyun-autoderiver"}>韻</IconButton>
                    </Grid>

                    <PostCard
                        image={picFolder + "love.png"}
                        alt="Ethan Yang"
                        title={getLocaleText(
                            {
                                "en": "Blogs of my love with Yuran He",
                                "zh-Hant": "與然小姐姐的戀愛記錄",
                                "zh-Hans": "与然小姐姐的恋爱记录",
                                "tto-bro": "Eei2 X87 Zei2HMeaH DaA SvaH3Oie3 Yd3Se7A",
                                "tto": "Re",
                                "ja": "然たんとの愛の物語",
                                "de": "Blogs meiner Liebe mit Yuran He"
                            },
                            lang
                        )}
                        main="Recording what we have experienced together."
                        toLink={domain + "love"}
                    />

                    <PostCard
                        image={picFolder + "cantonese-flashcard.png"}
                        alt="Cantonese Flashcard Screenshot"
                        title={getLocaleText(
                            {
                                "en": "Cantonese Flashcard",
                                "zh-Hant": "粵語字卡",
                                "zh-Hans": "粤语字卡",
                                "tto": "vmv ARD",
                            },
                            lang
                        )}
                        main="Display flashcards with Chinese characters and Jyutping with your comfortable speed."
                        toLink={domain + "cantonese-flashcard"}
                    />

                    <PostCard
                        image={picFolder + "khmer-starter.png"}
                        alt="Ethan Yang"
                        title={getLocaleText(
                            {
                                "en": "Khmer Starter",
                                "zh-Hant": "高棉語啟輝器",
                                "zh-Hans": "高棉语启辉器",
                                "tto-bro": "YRFVeaHZei2 Aae2XFeAQe3",
                                "tto": "AVRa Aae",
                            },
                            lang
                        )}
                        main="Split Khmer sentences into words and then look up its romanization, pronunciation and meaning (later) in Wiktionary."
                        toLink={domain + "khmer-starter"}
                    />

                    <PostCard
                        image={picFolder + "hanpoly.png"}
                        alt="Ethan Yang"
                        title={getLocaleText(
                            {
                                "en": "HanPoly",
                                "zh-Hant": "漢諸",
                                "zh-Hans": "汉诸",
                                "tto-bro": "XRH3Tei",
                                "tto": "XRHhoSe",
                            },
                            lang
                        )}
                        main="Find the pronunciation of a Chinese character in multiple languages and dialects."
                        toLink={domain + "hanpoly"}
                    />

                    <PostCard
                        image={picFolder + "three-body.png"}
                        alt="Three-Body Problem"
                        title={getLocaleText(
                            {
                                "en": "The Three-Body Problem",
                                "zh-Hant": "三體问题",
                                "zh-Hans": "三体问题",
                                "tto-bro": "CRVmae2 VFH3D8ae",
                                "tto": "ALCe7Z D AoKhFC Y-W",
                                "ja": "三体問題",
                                "de": "Das Dreikörperproblem"
                            },
                            lang
                        )}
                        main="Simulation of the three-body problem. Help the aliens with your findings!"
                        toLink={domain + "three-body"}
                    />

                    <PostCard
                        image={picFolder + "word-lookuper.png"}
                        alt="Screenshot of Word Lookup"
                        title={getLocaleText(
                            {
                                "en": "Word Lookup",
                                "zh-Hant": "查詞",
                                "zh-Hans": "查词",
                            },
                            lang
                        )}
                        main="Look up the word in Wiktionary with some additional functionalities."
                        toLink={domain + "word-lookuper"}
                    />

                    <PostCard
                        image={picFolder + "qieyun-autoderiver.png"}
                        alt="Ethan Yang"
                        title={getLocaleText(
                            {
                                "en": "Qieyun Autoderiver with Ttomni Rimduk",
                                "zh-Hant": "切韻音系自動推導器（含丌通語音讀）",
                                "zh-Hans": "切韵音系自动推导器（含丌通语音读）",
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
