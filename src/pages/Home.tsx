import "purecss/build/pure.css";
import * as React from "react";
import PostCard from "../components/PostCard";
import "../styles.scss";

import { Container, Grid, IconButton, Link as MuiLink, Stack, Typography } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import SchoolIcon from "@mui/icons-material/School";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "@mui/material/styles";
import { SiDuolingo } from "react-icons/si";
import { I18nText } from "../utils/I18n";

export default function Home(props: { lang: keyof I18nText }) {
    const { lang } = props;
    const theme = useTheme();

    const getLocaleText = (i18nText: I18nText, language: keyof I18nText) => {
        return language in i18nText ? i18nText[language] : i18nText["en"];
    };

    const domain = "https://twaqngu.com/";
    const picFolder = "https://twaqngu.github.io/public/index/pic/";
    const getMyProjectURL = (projname: string) => {
        return `https://${projname}.twaqngu.com/`;
    }

    return (
        <div>
            <Container maxWidth="md">
                <Stack spacing={4} px={2} pb={4}>
                    <Stack direction="row" spacing={2}>
                        <img alt="TwaqNgu" src={picFolder + "my-avatar.jpg"} width="72" height="72" />

                        <Stack>
                            <Typography variant="h5">
                                {getLocaleText(
                                    {
                                        "eo": "TvaNiu",
                                        "zh-Hant": "朵牛",
                                        "zh-Hans": "朵牛",
                                        "en": "Twaq-Ngu",
                                        "tto-bro": "Dnr2Zu",
                                        "tto": "hnCLo LrnKrHL",
                                        "ja": "朵牛（だぎゅう）",
                                        "de": "Twaq-Ngu",
                                        "ko": "타우(朵牛)",
                                        "fr": "Twaq-Ngu",
                                    },
                                    lang
                                )}
                            </Typography>

                            <Grid>
                                <IconButton href="https://github.com/twaqngu">
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton href="https://www.linkedin.com/in/yang-chenxi/">
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton href="https://twitter.com/twaqngu">
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton href="https://www.instagram.com/twaqngu">
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

                                <IconButton href="https://www.duolingo.com/profile/twaqngu">
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
                                "eo": "MSc Informadiko de la ",
                                "zh-Hant": "",
                                "zh-Hans": "",
                                "en": "Master of Science - Computer Science, ",
                                "tto-bro": "",
                                // "tto": ""
                                "ja": "",
                                "de": "MSc Informatik, ",
                                "ko": "",
                                "fr": "Master en sciences en informatique à l'",
                            },
                            lang
                        )}
                        <MuiLink href="https://www.ed.ac.uk/">
                            {getLocaleText(
                                {
                                    "eo": "Universitato de Edinburgo",
                                    "zh-Hant": "愛丁堡大學",
                                    "zh-Hans": "爱丁堡大学",
                                    "en": " the University of Edinburgh ",
                                    "tto-bro": "Oae3D8aH D8rQ3X8QmA",
                                    // "tto": ""
                                    "ja": "エディンバラ大学",
                                    "de": "Universität Edinburgh",
                                    "ko": "에든버러 대학교",
                                    "fr": "Université d'Edimbourg",
                                },
                                lang
                            )}
                        </MuiLink>
                        {getLocaleText(
                            {
                                "eo": "",
                                "zh-Hant": " 計算機科學理學碩士",
                                "zh-Hans": " 计算机科学理学硕士",
                                "en": "",
                                "tto-bro": "Yae3CnrH3Yde AnmX8QmA Sd2X8QmA T8ecAG8d2",
                                "ja": "　情報工学修士（理学）",
                                "ko": " 컴퓨터 과학 석사",
                            },
                            lang
                        )}
                    </Typography>
                    <Typography variant="body1">
                        <SchoolIcon />{" "}
                        {getLocaleText(
                            {
                                "eo": "Bakalaŭro pri Inĝenieristiko, Aŭtomobila elektroniko (Veturila Inĝenierado), ",
                                "en": "Bachelor of Engeering - Automotive Electronics (Vehicle Engineering), ",
                                "zh-Hant": "",
                                "zh-Hans": "",
                                "tto-bro": "",
                                // "tto": ""
                                "ja": "",
                                "de": "BEng - Fahrzeugelektronik (Fahrzeugtechnik) in ",
                                "ko": "",
                                "fr": "Baccalauréat en ingénierie en électronique automobile (génie des véhicules) à l'",
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
                            )}>
                            {getLocaleText(
                                {
                                    "eo": "Tongji Universitato",
                                    "zh-Hant": "同濟大學",
                                    "zh-Hans": "同济大学",
                                    "en": "Tongji University",
                                    "tto-bro": "D8nZ9ae3 D8rQ3X8QmA",
                                    // "tto": ""
                                    "ja": "同済大学",
                                    "de": "Tongji-Universität",
                                    "ko": "퉁지 대학",
                                    "fr": "Université Tongji",
                                },
                                lang
                            )}
                        </MuiLink>
                        {getLocaleText(
                            {
                                "eo": "",
                                "zh-Hant": " 汽車電子（車輛工程）工學學士",
                                "zh-Hans": " 汽车电子（车辆工程）工学学士",
                                "en": "",
                                // "tto": "Fab RhSe"
                                "tto-bro": "Aye3Bert DaH39y2 (BerSerZ3 YnZD8lecZ) YnZX8QmA X8QmAG8d2",
                                "ja": "　自動車電子（自動車工程）学士（工学）",
                                "de": "",
                                "ko": " 자동차 전자 (자동차공학과) 학사",
                            },
                            lang
                        )}
                    </Typography>

                    <Typography variant="h2">
                        {getLocaleText(
                            {
                                "eo": "Retaj Aplikoj",
                                "zh-Hant": "Web 應用",
                                "zh-Hans": "Web 应用",
                                "en": "Web Apps",
                                "tto-bro": "Fab OeZ3EemZ3",
                                "tto": "nab rhSe",
                                "ja": "Webアプリ",
                                "de": "Webanwendungen",
                                "ko": "웹 앱",
                                "fr": "Applications Web",
                            },
                            lang
                        )}
                    </Typography>

                    <Grid>
                        <IconButton href={getMyProjectURL("love")}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton href={getMyProjectURL("alpha-beats")}>א</IconButton>
                        <IconButton href={getMyProjectURL("cantonese-flashcard")}>粵</IconButton>
                        <IconButton href={getMyProjectURL("hanpoly")}>漢</IconButton>
                        <IconButton href={getMyProjectURL("khmer-starter")}>ក</IconButton>
                        <IconButton href={getMyProjectURL("three-body")}>
                            <ScatterPlotIcon />
                        </IconButton>
                        <IconButton href={getMyProjectURL("word-lookuper")}>
                            <TravelExploreIcon />
                        </IconButton>
                        <IconButton href={getMyProjectURL("qieyun-autoderiver")}>韻</IconButton>
                    </Grid>

                    <PostCard
                        image={picFolder + "love.png"}
                        alt="Ethan Yang"
                        title={getLocaleText(
                            {
                                "eo": "La Amrilatoj Kun Fraŭlino TsraewMaeq",
                                "zh-Hant": "與抓馬小姐的戀愛記錄",
                                "zh-Hans": "与抓马小姐的恋爱记录",
                                "en": "Blogs of my love with TsraewMaeq",
                                "tto-bro": "Eei2 X8m Zei2HMeaH DaA SvaH3Oie3 Yd3SemA",
                                "tto": "re",
                                "ja": "ドラマたんとの愛の物語",
                                "de": "Blogs meiner Liebe mit TsraewMaeq",
                                "ko": "드라마과의 사랑 이야기",
                                "fr": "Blogs de mon amour avec TsraewMaeq",
                            },
                            lang
                        )}
                        main="Recording what we have experienced together."
                        toLink={getMyProjectURL("love")}
                    />

                    <PostCard
                        image={picFolder + "alpha-beats.png"}
                        alt="Alpha Beats Screenshot"
                        title={getLocaleText(
                            {
                                "eo": "Alfa Salteto",
                                "zh-Hant": "字母跳動",
                                "zh-Hans": "字母跳动",
                                "en": "Alpha Beats",
                                "tto": "rSNr be7",
                                "tto-bro": "98d3Vn2 Lan3D8nZ2",
                                "ja": "アルファ ビーツ",
                            },
                            lang
                        )}
                        main="Training on different kinds of alphabet or other kinds of writing systems."
                        toLink={getMyProjectURL("alpha-beats")}
                    />

                    <PostCard
                        image={picFolder + "cantonese-flashcard.png"}
                        alt="Cantonese Flashcard Screenshot"
                        title={getLocaleText(
                            {
                                "eo": "Kantona Memkartaro",
                                "zh-Hant": "粵語字卡",
                                "zh-Hans": "粤语字卡",
                                "en": "Cantonese Flashcard",
                                "tto": "vmv ARD",
                            },
                            lang
                        )}
                        main="Display flashcards with Chinese characters and Jyutping with your comfortable speed."
                        toLink={getMyProjectURL("cantonese-flashcard")}
                    />

                    <PostCard
                        image={picFolder + "hanpoly.png"}
                        alt="Ethan Yang"
                        title={getLocaleText(
                            {
                                "eo": "HanPoli",
                                "zh-Hant": "漢諸",
                                "zh-Hans": "汉诸",
                                "en": "HanPoly",
                                "tto-bro": "XrH3Tei",
                                "tto": "XrHhoSe",
                            },
                            lang
                        )}
                        main="Find the pronunciation of a Chinese character in multiple languages and dialects."
                        toLink={getMyProjectURL("hanpoly")}
                    />

                    <PostCard
                        image={picFolder + "khmer-starter.png"}
                        alt="Ethan Yang"
                        title={getLocaleText(
                            {
                                "eo": "Khmer Lanterno",
                                "zh-Hant": "高棉語啟輝器",
                                "zh-Hans": "高棉语启辉器",
                                "en": "Khmer Starter",
                                "tto-bro": "YrnVeaHZei2 Aae2XneAQe3",
                                "tto": "AVra Aae",
                            },
                            lang
                        )}
                        main="Split Khmer sentences into words and then look up its romanization, pronunciation and meaning (later) in Wiktionary."
                        toLink={getMyProjectURL("khmer-starter")}
                    />

                    <PostCard
                        image={picFolder + "three-body.png"}
                        alt="Three-Body Problem"
                        title={getLocaleText(
                            {
                                "eo": "La Problemo de la Tri Korpaj",
                                "zh-Hant": "三體问题",
                                "zh-Hans": "三体问题",
                                "en": "The Three-Body Problem",
                                "tto-bro": "CrVLae2 VnH3D8ae",
                                "tto": "AcCemZ D AoKhnC Y-W",
                                "ja": "三体問題",
                                "de": "Das Dreikörperproblem",
                            },
                            lang
                        )}
                        main="Simulation of the three-body problem. Help the aliens with your findings!"
                        toLink={getMyProjectURL("three-body")}
                    />

                    <PostCard
                        image={picFolder + "word-lookuper.png"}
                        alt="Screenshot of Word Lookup"
                        title={getLocaleText(
                            {
                                "eo": "Vortaro Konsulto",
                                "zh-Hant": "查詞",
                                "zh-Hans": "查词",
                                "en": "Word Lookup",
                            },
                            lang
                        )}
                        main="Look up the word in Wiktionary with some additional functionalities."
                        toLink={getMyProjectURL("word-lookuper")}
                    />

                    <PostCard
                        image={picFolder + "qieyun-autoderiver.png"}
                        alt="Ethan Yang"
                        title={getLocaleText(
                            {
                                "eo": "Qieyun Memderivilo Kun Dzwietthoungika Jimduk",
                                "zh-Hant": "切韻音系自動推導器（含絕通語音讀）",
                                "zh-Hans": "切韵音系自动推导器（含绝通语音读）",
                                "en": "Qieyun Autoderiver with Ttomni Rimduk",
                                "tto-bro": "7aLnH3 OQeVX8ae3 98e3D8nZ2 LoeD8rn3AQe3 (X8iV 9vaLLnZZei2 OQeVD8nA)",
                                // "tto": ""
                            },
                            lang
                        )}
                        main="Forked from https://github.com/nk2028/qieyun-autoderiver, with my own
                  Ttomni Rimduk (OQeVD8FA), which is used by my own Ttomni language."
                        toLink={getMyProjectURL("qieyun-autoderiver")}
                    />
                </Stack>
            </Container>
        </div>
    );
}
