import "purecss/build/pure.css";
import React, { useState, useEffect } from "react";
import "../styles.scss";
import { 
  Container, Link as MuiLink, Stack, Typography
} from '@mui/material';

export default function BlogList({ lang }) {
    // date id -> [ lang name filename ]
    // so can display date, name, whether this lang, and fetch using filename
    let [ blogs, setBlogs ] = useState({});
    let [ ids, setIds ] = useState([]);
    let [ titleTranslations, setTitleTranslations ] = useState();
    const fallbackLanguages = ['en', 'zh-Hans', 'zh-Hant', 'ja', 'de', 'tto', 'tto-bro'];

    const fetchBlogList = async () => {
        const text = await (await fetch('https://api.github.com/repos/yangchnx/blog/contents/')).text();
        let data = JSON.parse(text);
        data = data.map(info => info.name);
        console.log(data);
        let res = {}
        let ids = [];
        for (let fileName of data) {
            // example: 2021-0915.about-me.About_Me.en.life.md
            let els = fileName.split('.');
            if (els.length !== 6) continue;
            if (els[0] + els[1] in res)
                res[els[0] + els[1]][els[3]] = [fileName, els[2].replaceAll('_', ' ')];
            else {
                res[els[0] + els[1]] = {};
                res[els[0] + els[1]][els[3]] = [fileName, els[2].replaceAll('_', ' ')];
                ids.push(els[0] + els[1]);
            }
        }
        ids = ids.reverse();
        console.log(res)
        console.log(ids)
        setBlogs(res);
        setIds(ids);
    }

    const fetchTitleTranslations = async () => {
        const text = await (await fetch('https://raw.githubusercontent.com/yangchnx/blog/main/title-translations.json')).text();
        setTitleTranslations(JSON.parse(text));
    }

    useEffect(() => {
        fetchBlogList();
        fetchTitleTranslations();
    }, []);

    const getLocaleText = (i18nText, language) => {
        return language in i18nText? i18nText[language] : i18nText["en"];
    }

    const langNames =  {
        "en": {
            "en": "English", "zh-Hans": "英语", 'zh-Hant': '英語', 'ja': '英語', 
            'de': 'Englisch', 'tto': 'aZYSeW', 'tto-bro': 'OQeLZZei2'
        },
        "zh-Hans": {
            "en": "Simplified Chinese", "zh-Hans": "简体中文", 'zh-Hant': '簡體中文', 'ja': '簡体字中国語', 
            'de': 'Vereinfachtes Chinesisch', 'tto': 'YQaHmaeDeFZVFH', 'tto-bro': 'YQaH2mae2 DleFZVFH'
        },
        "zh-Hant": {
            "en": "Traditional Chinese", "zh-Hans": "繁体中文", 'zh-Hant': '繁體中文', 'ja': '繁体字中国語', 
            'de': 'Traditionelles Chinesisch', 'tto': 'bvoHmaeDeFZVFH', 'tto-bro': 'b8voHmae2 DleFZVFH'
        },
        "ja": {
            "en": "Japanese", "zh-Hans": "日语", 'zh-Hant': '日語', 'ja': '日本語', 
            'de': 'Japanisch', 'tto': 'HeXoZYo', 'tto-bro': 'HMemZei2'
        },
        "de": {
            "en": "German", "zh-Hans": "德语", 'zh-Hant': '德語', 'ja': 'ドイツ語', 
            'de': 'Deutsch', 'tto': 'D7vJ', 'tto-bro': 'DiAZei2'
        },
        "tto": {
            "en": "Ttomni", "zh-Hans": "丌通语", 'zh-Hant': '丌通語', 'ja': '丌通語', 
            'de': 'Ttomni', 'tto': 'mim', 'tto-bro': 'Y8dmFZZei2'
        },
        "tto-bro": {
            "en": "Ttomni Brongduk", "zh-Hans": "丌棒语", 'zh-Hant': '丌棒語', 'ja': '丌棒語', 
            'de': 'Ttomni Brongduk', 'tto': 'bQ7ZDFA', 'tto-bro': 'Y8db8Q7Z2Zei2'
        }
    }

    const languageCodeToLocale = (langCode) => {
        return langNames[langCode][lang];
    }

    return (
          <Container maxWidth="md">
            
            <Stack  spacing={4} px={2} pb={4}>
                <Typography  variant="h3">{getLocaleText(
                            {
                                "en": "Blog List", 
                                "zh-Hant": "文章目錄", 
                                "zh-Hans": "文章目录", 
                                "tto-bro": "VFHTeRZ VeFASe7A", 
                                "tto": "SeCm D bS7Y", 
                                "ja": "ブログリスト", 
                                "de": "Blogliste"}, 
                            lang
                            )}</Typography>
                {ids&&ids.map(id => (
                    id in blogs ?
                    lang in blogs[id]? 
                    (
                        <div>
                            <MuiLink key={id} href={"/blog/" + blogs[id][lang][0]}>{blogs[id][lang][1]}</MuiLink>
                            <Typography variant='caption'>{' (' + id.slice(0, 9) + ')'}</Typography>
                        </div>
                    ):
                    ((!titleTranslations||!(lang in titleTranslations[id.slice(9)]))?(
                        <div>
                            <MuiLink key={id} href={"/blog/" + blogs[id][fallbackLanguages.filter(l => l in blogs[id])[0]][0]}>
                                {blogs[id][fallbackLanguages.filter(l => l in blogs[id])[0]][1]}
                            </MuiLink>
                            <Typography variant='caption'>
                                {' (' + id.slice(0, 9) + ') ' + getLocaleText(
                                {
                                    "en": "(Not in the current language)", 
                                    "zh-Hant": "（非當前語言）", 
                                    "zh-Hans": "（非当前语言）", 
                                    "tto-bro": "(bFe DRZ98aH Zei2ZeiH)", 
                                    "tto": "(Ve SRHM aHaH)", 
                                    "ja": "（今の言語ではありません）", 
                                    "de": "(Nicht auf die aktuelle Sprache)"}, 
                                lang
                                )}
                            </Typography>
                        </div>
                    ):(
                        <div>
                            <MuiLink key={id} href={"/blog/" + blogs[id][fallbackLanguages.filter(l => l in blogs[id])[0]][0]}>
                                {titleTranslations[id.slice(9)][lang]}
                            </MuiLink>
                            <Typography variant='caption'>
                                {' (' + id.slice(0, 9) + ') ' + getLocaleText(
                                {
                                    "en": "(Not in the current language. Original title (in " + languageCodeToLocale(fallbackLanguages.filter(l => l in blogs[id])[0]) + "): ", 
                                    "zh-Hant": "（非當前語言。原標題（" + languageCodeToLocale(fallbackLanguages.filter(l => l in blogs[id])[0]) + "）：", 
                                    "zh-Hans": "（非当前语言。原标题（" + languageCodeToLocale(fallbackLanguages.filter(l => l in blogs[id])[0]) + "）：", 
                                    "tto-bro": "(bFe DRZ98aH Zei2ZeiH. ZvoH beaFD8ae (" + languageCodeToLocale(fallbackLanguages.filter(l => l in blogs[id])[0]) + "): ", 
                                    "tto": "(Ve SRHM aHaH. beaFDae aH eSSa (" + languageCodeToLocale(fallbackLanguages.filter(l => l in blogs[id])[0]) + "): ", 
                                    "ja": "（今の言語ではありません。元の題名（" + languageCodeToLocale(fallbackLanguages.filter(l => l in blogs[id])[0]) + "で）：", 
                                    "de": "(Nicht auf die aktuelle Sprache. Der Originaltitel (auf " + languageCodeToLocale(fallbackLanguages.filter(l => l in blogs[id])[0]) + "): "}, 
                                lang
                                )}
                                {blogs[id][fallbackLanguages.filter(l => l in blogs[id])[0]][1]}
                                {getLocaleText(
                                {
                                    "en": ")", "zh-Hant": "）", "zh-Hans": "）", "tto-bro": ")", "tto": ")", "ja": "）",  "de": ")"}, 
                                lang
                                )}
                            </Typography>
                        </div>
                    )):<Typography variant='caption'>{'Loading'}</Typography>
                ))}
            </Stack>
          </Container>
      );
};