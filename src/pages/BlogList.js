import "purecss/build/pure.css";
import React, { useState, useEffect } from "react";
import "../styles.scss";
import { Container, Link as MuiLink, Stack, Typography } from "@mui/material";
import BlogListItem from "../components/BlogListItem";
import { getLocaleText } from "../data/I18n";

export default function BlogList({ lang }) {
    // date id -> [ lang name filename ]
    // so can display date, name, whether this lang, and fetch using filename
    let [blogs, setBlogs] = useState({});
    let [ids, setIds] = useState([]);
    let [titleTranslations, setTitleTranslations] = useState();


    const fetchBlogList = async () => {
        const text = await (
            await fetch("https://api.github.com/repos/yangchnx/blog/contents/")
        ).text();
        let data = JSON.parse(text);
        data = data.map((info) => info.name);
        let res = {};
        let ids = [];
        for (let fileName of data) {
            // example: 2021-0915.about-me.About_Me.en.life.md
            let els = fileName.split(".");
            if (els.length !== 6) continue;
            if (els[0] + els[1] in res)
                res[els[0] + els[1]][els[3]] = [fileName, els[2].replaceAll("_", " ")];
            else {
                res[els[0] + els[1]] = {};
                res[els[0] + els[1]][els[3]] = [fileName, els[2].replaceAll("_", " ")];
                ids.push(els[0] + els[1]);
            }
        }
        ids = ids.reverse();
        setBlogs(res);
        setIds(ids);
    };

    const fetchTitleTranslations = async () => {
        const text = await (
            await fetch(
                "https://raw.githubusercontent.com/yangchnx/blog/main/title-translations.json"
            )
        ).text();
        setTitleTranslations(JSON.parse(text));
    };

    useEffect(() => {
        fetchBlogList();
        fetchTitleTranslations();
    }, []);

    return (
        <Container maxWidth="md">
            <Stack spacing={4} px={2} pb={4}>
                <Typography variant="h3">
                    {getLocaleText(
                        {
                            en: "Blog List",
                            "zh-Hant": "文章目錄",
                            "zh-Hans": "文章目录",
                            "tto-bro": "VFHTeRZ VeFASe7A",
                            tto: "SeCm D bS7Y",
                            ja: "ブログリスト",
                            de: "Blogliste",
                        },
                        lang
                    )}
                </Typography>
                {ids &&
                    ids.map((id) => <BlogListItem key={id} id={id} blogs={blogs} lang={lang} titleTranslations={titleTranslations} />)}
            </Stack>
        </Container>
    );
}
