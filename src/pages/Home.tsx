import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container, Grid, IconButton, Link as MuiLink, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "purecss/build/pure.css";
import * as React from "react";
import { useState } from "react";
import { SiDuolingo } from "react-icons/si";
import PostCard from "../components/PostCard";
import "../styles.scss";
import { getDaoDeJingChapter } from "../utils/DaoDeJing";
import { I18nText, getLocaleText } from "../utils/I18n";

const domain = "https://pustot.com/";
const picFolder = "https://pustot.github.io/public/index/pic/";
const getMyProjectURL = (projname: string) => {
    return `https://${projname}.pustot.com/`;
};

function formatAppName(appName: string): string {
    return appName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const WebAppGridItem = (props: { appName: string, displayName?: string }) => {
    const { appName, displayName } = props;
    return (
        <Grid item>
            <a href={getMyProjectURL(appName)}
                style={{ textDecoration: "none", display: 'block' }}>
                <img
                    alt={appName + "Logo"}
                    src={picFolder + "logo-" + appName + ".webp"}
                    width="96"
                    height="96"
                    style={{
                        borderRadius: "20%", // 圆角
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // 阴影
                        display: "block", // 将图片设置为块级元素，以便应用样式
                        margin: "0 auto 4px", // 居中显示图片
                    }}
                />
                {/* 将宽度限制为图片的宽度，并水平居中 */}
                <Typography variant="body2" align="center" color="textPrimary"
                    style={{ width: 96, margin: '0 auto', whiteSpace: 'pre-line' }} >
                    {displayName || formatAppName(appName)}
                </Typography>
            </a>
        </Grid>
    );
};

export default function Home(props: { lang: keyof I18nText }) {
    const { lang } = props;
    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [randomDaodejingChapterNo, setRandomDaodejingChapterNo] = useState(Math.floor(Math.random() * 81) + 1);

    return (
        <div>
            <Container maxWidth="md">
                <Stack spacing={2} px={0} pb={4}>
                    <Stack direction="row" spacing={2}>
                        <img alt="Pusto" src={picFolder + "logo-de-pusto.webp"} width="72" height="72" />

                        <Stack>
                            <Typography variant="h5">
                                {getLocaleText(
                                    {
                                        "zh-Hans": "浦司图",
                                        "zh-Hant": "浦司圖",
                                        "en": "Pusto (浦司圖)",
                                        "ja": "浦司図（ほしと）",
                                        "de": "Pusto (浦司圖)",
                                        "ko": "포사도(浦司圖)",
                                        "ko-Han": "浦司圖(포사도)",
                                        "eo": "Pusto (浦司圖)",
                                        "fr": "Pusto (浦司圖)",
                                        "vi": "Phổ Ti Đồ (浦司圖)",
                                        "vi-Han": "浦司圖（Phổ Ti Đồ）",
                                        "es": "Pusto (浦司圖)",
                                        "tto-bro": "ho2CwD8o (浦司圖)",
                                        "tto": "hnCLo LrnKrHL (浦司圖)",
                                    },
                                    lang,
                                )}
                            </Typography>

                            <Grid>
                                <IconButton href="https://github.com/pustot">
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton href="https://www.linkedin.com/in/yang-chenxi/">
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton href="https://twitter.com/pustot">
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton href="https://www.instagram.com/pustot">
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

                                <IconButton href="https://www.duolingo.com/profile/pustot">
                                    <SiDuolingo />
                                </IconButton>

                                {/* <IconButton href="https://linktr.ee/smartdramo">
                                    <img alt="Linktree" src={picFolder + "LinkTree.webp"} height="24" width="24" />
                                </IconButton> */}
                            </Grid>
                        </Stack>
                    </Stack>

                    <Typography variant="body1">
                        <EmojiPeopleIcon />{" "}
                        {getLocaleText(
                            {
                                "zh-Hans": "你好，我是浦司图 Pusto，一枚喜欢语言的程序员。",
                                "zh-Hant": "你好，我是浦司圖 Pusto，一枚喜歡語言的程序員。",
                                "en": "Hello, I'm Pusto (浦司圖), a linguaphile programmer.",
                                "ja": "こんにちは、浦司図（ほしと）と申します。言語が好きなプログラマーです。",
                                "de": "Hallo, ich bin Pusto (浦司圖), ein Programmierer, der Sprachen und Sprachwissenschaft liebt.",
                                "ko": "안녕하세요, 저는 포사도(浦司圖)라고 합니다. 언어를 좋아하는 프로그래머예요.",
                                "ko-Han": "安寧하세요, 저는 浦司圖(포사도)라고 합니다. 言語를 좋아하는 프로그래머예요.",
                                "eo": "Saluton, mi estas Pusto (浦司圖), programisto kiu ŝatas lingvojn.",
                                "fr": "Bonjour, je suis Pusto (浦司圖), un programmeur qui aime les langues.",
                                "vi": "Xin chào, tôi là Phổ Ti Đồ (浦司圖), một lập trình viên yêu thích ngôn ngữ.",
                                "vi-Han": "吀嘲，碎羅浦司圖（Phổ Ti Đồ），𠬠立程員𢞅適言語。",
                                "es": "Hola, soy Pusto (浦司圖), un programador a quien le gustan los idiomas.",
                                //"tto-bro": "",
                                // "tto": ""
                            },
                            lang,
                        )}
                    </Typography>
                    <Typography variant="body1">
                        <SchoolIcon />{" "}
                        {getLocaleText(
                            {
                                "zh-Hant": "",
                                "zh-Hans": "",
                                "en": "Master of Science - Computer Science, ",
                                "ja": "",
                                "de": "MSc Informatik, ",
                                "ko": "",
                                "ko-Han": "",
                                "eo": "MSc Informadiko de la ",
                                "fr": "Master en sciences en informatique à l'",
                                "vi": "Thạc sĩ Khoa học - Khoa học Máy tính, ",
                                "vi-Han": "碩士科學 - 科學𢵯省，",
                                "es": "Maestría en Ciencias - Ciencias de la Computación, ",
                                "tto-bro": "",
                                // "tto": ""
                            },
                            lang,
                        )}
                        <MuiLink href="https://www.ed.ac.uk/">
                            {getLocaleText(
                                {
                                    "zh-Hant": "愛丁堡大學",
                                    "zh-Hans": "爱丁堡大学",
                                    "en": " the University of Edinburgh ",
                                    "ja": "エディンバラ大学",
                                    "de": "Universität Edinburgh",
                                    "ko": "에든버러 대학교",
                                    "ko-Han": "에든버러 大學校",
                                    "eo": "Universitato de Edinburgo",
                                    "fr": "Université d'Edimbourg",
                                    "vi": "Đại học Edinburgh",
                                    "vi-Han": "大學 Edinburgh",
                                    "es": "Universidad de Edimburgo",
                                    "tto-bro": "Oae3D8aH D8rQ3X8QmA",
                                    // "tto": ""
                                },
                                lang,
                            )}
                        </MuiLink>
                        {getLocaleText(
                            {
                                "zh-Hant": " 計算機科學理學碩士",
                                "zh-Hans": " 计算机科学理学硕士",
                                "en": "",
                                "ja": "　情報工学修士（理学）",
                                "ko": " 컴퓨터 과학 석사",
                                "ko-Han": " 電算學 碩士",
                                "eo": "",
                                "vi": "",
                                "vi-Han": "",
                                "es": "",
                                "tto-bro": "Yae3CnrH3Yde AnmX8QmA Sd2X8QmA T8ecAG8d2",
                            },
                            lang,
                        )}
                    </Typography>
                    <Typography variant="body1">
                        <SchoolIcon />{" "}
                        {getLocaleText(
                            {
                                "en": "Bachelor of Engeering - Automotive Electronics (Vehicle Engineering), ",
                                "zh-Hant": "",
                                "zh-Hans": "",
                                "ja": "",
                                "de": "BEng - Fahrzeugelektronik (Fahrzeugtechnik) in ",
                                "ko": "",
                                "ko-Han": "",
                                "eo": "Bakalaŭro pri Inĝenieristiko, Aŭtomobila elektroniko (Veturila Inĝenierado), ",
                                "fr": "Baccalauréat en ingénierie en électronique automobile (génie des véhicules) à l'",
                                "vi": "Cử nhân Kỹ sư - Điện tử ô tô (Kỹ thuật xe hơi), ",
                                "vi-Han": "舉人技師 - 電子車唏（技術車唏），",
                                "es": "Licenciatura en Ingeniería - Electrónica Automotriz (Ingeniería de Vehículos), ",
                                "tto-bro": "",
                                // "tto": ""
                            },
                            lang,
                        )}
                        <MuiLink
                            href={getLocaleText(
                                {
                                    "en": "https://en.tongji.edu.cn/",
                                    "zh-Hant": "https://www.tongji.edu.cn/",
                                    "zh-Hans": "https://www.tongji.edu.cn/",
                                    "de": "https://de.tongji.edu.cn/",
                                },
                                lang,
                            )}>
                            {getLocaleText(
                                {
                                    "zh-Hant": "同濟大學",
                                    "zh-Hans": "同济大学",
                                    "en": "Tongji University",
                                    "ja": "同済大学",
                                    "de": "Tongji-Universität",
                                    "ko": "동제대학(同濟大學)",
                                    "ko-Han": "同濟大學",
                                    "eo": "Tongji Universitato",
                                    "fr": "Université Tongji",
                                    "vi": "Đại học Đồng Tế",
                                    "vi-Han": "大學同濟",
                                    "es": "Universidad Tongji",
                                    "tto-bro": "D8nZ9ae3 D8rQ3X8QmA",
                                    // "tto": ""
                                },
                                lang,
                            )}
                        </MuiLink>
                        {getLocaleText(
                            {
                                "zh-Hant": " 汽車電子（車輛工程）工學學士",
                                "zh-Hans": " 汽车电子（车辆工程）工学学士",
                                "en": "",
                                "ja": "　自動車電子（自動車工程）学士（工学）",
                                "de": "",
                                "ko": " 자동차 전자 (자동차공학과) 학사",
                                "ko-Han": " 自動車 電子 (自動車工學科) 學士",
                                "eo": "",
                                "vi": "",
                                "es": "",
                                // "tto": "Fab RhSe"
                                "tto-bro": "Aye3Bert DaH39y2 (BerSerZ3 YnZD8lecZ) YnZX8QmA X8QmAG8d2",
                            },
                            lang,
                        )}
                    </Typography>

                    <Typography variant="h4" pt={2} align={isSmallScreen ? "center" : "left"}>
                        {getLocaleText(
                            {
                                "zh-Hant": "Web 應用",
                                "zh-Hans": "Web 应用",
                                "en": "Web Apps",
                                "ja": "Webアプリ",
                                "de": "Webanwendungen",
                                "ko": "웹 앱",
                                "ko-Han": "웹 앱",
                                "eo": "Retaj Aplikoj",
                                "fr": "Applications Web",
                                "vi": "Ứng dụng web",
                                "vi-Han": "應用 web",
                                "es": "Aplicaciones web",
                                "tto-bro": "Fab OeZ3EemZ3",
                                "tto": "nab rhSe",
                            },
                            lang,
                        )}
                    </Typography>

                    <Typography variant="h6" align={isSmallScreen ? "center" : "left"}>
                        {getLocaleText(
                            {
                                "zh-Hant": "精選應用",
                                "zh-Hans": "精选应用",
                                "en": "Featured Apps",
                                "eo": "Elektitaj Aplikoj",
                            },
                            lang,
                        )}
                    </Typography>

                    {/* This outer <div> see 
                    https://stackoverflow.com/questions/67693677/material-ui-grid-how-only-space-between-elements-on-the-inside-not-outside */}
                    <div>
                        <Grid container spacing={2} justifyContent={isSmallScreen ? "center" : "left"}>
                            <WebAppGridItem appName={"studling"} displayName={"甪端 Studling"} />
                            <WebAppGridItem appName={"love"} />
                        </Grid>
                    </div>

                    <Typography variant="h6" align={isSmallScreen ? "center" : "left"}>
                        {getLocaleText(
                            {
                                "zh-Hant": "其他應用",
                                "zh-Hans": "其他应用",
                                "en": "Other Apps",
                                "eo": "Aliaj Aplikoj",
                            },
                            lang,
                        )}
                    </Typography>

                    <div>
                        <Grid container spacing={2} justifyContent={isSmallScreen ? "center" : "left"}>
                            <WebAppGridItem appName={"map-compare"} />
                            <WebAppGridItem appName={"hanpoly"} />
                            <WebAppGridItem appName={"mancan"} />
                            <WebAppGridItem appName={"alpha-beats"} />
                            <WebAppGridItem appName={"cantonese-flashcard"} />
                            <WebAppGridItem appName={"khmer-starter"} />
                            <WebAppGridItem appName={"three-body"} />
                            <WebAppGridItem appName={"word-lookuper"} displayName={"Word Lookup"} />
                            <WebAppGridItem appName={"qieyun-autoderiver"} />
                        </Grid>
                    </div>

                    <PostCard
                        image={picFolder + "love.png"}
                        alt="Love"
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
                            lang,
                        )}
                        main="Recording what we have experienced together."
                        toLink={getMyProjectURL("love")}
                    />

                    <PostCard
                        image={picFolder + "studling.png"}
                        alt="stud ling"
                        title={getLocaleText(
                            {
                                "eo": "甪端 Studling",
                                "zh-Hant": "甪端 Studling",
                                "zh-Hans": "甪端 Studling",
                                "en": "甪端 Studling",
                            },
                            lang,
                        )}
                        main="Multiple languages, multiple learning capabilities, in one site."
                        toLink={getMyProjectURL("studling")}
                    />

                    <PostCard
                        image={picFolder + "mancan.png"}
                        alt="Mancan: Mandarin speaker can study Cantonese easier"
                        title={getLocaleText(
                            {
                                "eo": "Mancan",
                                "zh-Hant": "普通粵",
                                "zh-Hans": "普通粤",
                                "en": "Mancan",
                                "ja": "マンカン",
                                "ko": "맨캔",
                            },
                            lang,
                        )}
                        main="Help Mandarin speakers learn Cantonese by highlighting which parts of each Hanzi can be converted directly from Putonghua with simple rules and which parts not."
                        toLink={getMyProjectURL("mancan")}
                    />

                    <PostCard
                        image={picFolder + "map-compare.png"}
                        alt="MapCompare: Compare maps in the same scale"
                        title={getLocaleText(
                            {
                                "eo": "MapKompari",
                                "zh-Hant": "比圖",
                                "zh-Hans": "比图",
                                "en": "Mancan",
                                "ja": "比圖",
                                "ko": "비도",
                            },
                            lang,
                        )}
                        main="Compare maps using the same scale, so that you can know their sizes with more certainty."
                        toLink={getMyProjectURL("map-compare")}
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
                            lang,
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
                            lang,
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
                            lang,
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
                            lang,
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
                            lang,
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
                            lang,
                        )}
                        main="Look up the word in Wiktionary with some additional functionalities."
                        toLink={getMyProjectURL("word-lookuper")}
                    />

                    <PostCard
                        image={picFolder + "qieyun-autoderiver.png"}
                        alt="Qieyun Autoderiver"
                        title={getLocaleText(
                            {
                                "eo": "Qieyun Memderivilo Kun Dzwietthoungika Jimduk",
                                "zh-Hant": "切韻音系自動推導器（浦司圖試驗fork）",
                                "zh-Hans": "切韵音系自动推导器（浦司图试验fork）",
                                "en": "Qieyun Autoderiver (Pusto test fork)",
                                "tto-bro": "7aLnH3 OQeVX8ae3 98e3D8nZ2 LoeD8rn3AQe3",
                                // "tto": ""
                            },
                            lang,
                        )}
                        main="Forked from https://github.com/nk2028/qieyun-autoderiver, with my own
                  schemas or adjustments."
                        toLink={getMyProjectURL("qieyun-autoderiver")}
                    />

                    <Typography pt={10} variant="body1">
                        {getDaoDeJingChapter(randomDaodejingChapterNo)}
                        <br />
                        <br />
                        ——《道德经》第{randomDaodejingChapterNo}章
                        <IconButton
                            onClick={() => setRandomDaodejingChapterNo(Math.floor(Math.random() * 81) + 1)}
                            color="primary" aria-label="shuffle chapter">
                            <ShuffleIcon />
                        </IconButton>
                    </Typography>

                </Stack>
            </Container>
        </div>
    );
}
