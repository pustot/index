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
                res[els[0] + els[1]][els[3]] = [fileName, els[2].replace('_', ' ')];
            else {
                res[els[0] + els[1]] = {};
                res[els[0] + els[1]][els[3]] = [fileName, els[2].replace('_', ' ')];
                ids.push(els[0] + els[1]);
            }
        }
        ids = ids.reverse();
        console.log(res)
        console.log(ids)
        setBlogs(res);
        setIds(ids);
    }

    useEffect(() => {
        fetchBlogList();
    }, []);

    const getLocaleText = (i18nText, language) => {
        return language in i18nText? i18nText[language] : i18nText["en"];
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
                    (
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
                    ):<Typography variant='caption'>{'Loading'}</Typography>
                ))}
            </Stack>
          </Container>
      );
};