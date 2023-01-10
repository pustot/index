import { Container, Stack, Typography } from "@mui/material";
import "purecss/build/pure.css";
import * as React from "react";
import { useEffect, useState } from "react";
import BlogListItem from "../components/BlogListItem";
import { getLocaleText, I18nText, LangCode } from "../data/I18n";
import "../styles.scss";

interface GithubContentsResp {
    name: string;
    path?: string;
    sha?: string;
    size?: number;
    url?: string;
    html_url?: string;
    git_url?: string;
    download_url?: string;
    type?: string;
    _links?: {
        self: string;
        git: string;
        html: string;
    };
}

export type Lang2FNID = {
    [key in LangCode]?: { fileName: string; title: string };
};

export type TitleTranslationsResp = {
    [key in string]?: I18nText;
};

export default function BlogList(props: { lang: keyof I18nText }) {
    const { lang } = props;
    // date id -> [ lang name filename ]
    // so can display date, name, whether this lang, and fetch using filename
    let [blogs, setBlogs] = useState<Map<string, Lang2FNID>>();
    let [ids, setIds] = useState<string[]>([]);
    let [titleTranslations, setTitleTranslations] = useState<TitleTranslationsResp>();

    const fetchBlogList = async () => {
        const text = await (await fetch("https://api.github.com/repos/yangchnx/blog/contents/")).text();
        let dataResp: GithubContentsResp[] = JSON.parse(text);
        let data: string[] = dataResp.map(info => info.name);
        let res = new Map<string, Lang2FNID>();
        let ids = [];
        for (let fileName of data) {
            // example: 2021-0915.about-me.About_Me.en.life.md
            let els = fileName.split(".");
            if (els.length !== 6) continue;
            let dateid = els[0] + els[1];
            if (!res.has(dateid)) {
                ids.push(dateid);
            }
            let v: Lang2FNID = res.get(dateid) || {};
            v[els[3] as LangCode] = { fileName: fileName, title: els[2].replaceAll("_", " ") };
            res.set(dateid, v);
        }
        ids = ids.reverse();
        setBlogs(res);
        setIds(ids);
    };

    const fetchTitleTranslations = async () => {
        const text = await (
            await fetch("https://raw.githubusercontent.com/yangchnx/blog/main/title-translations.json")
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
                            "en": "Blog List",
                            "zh-Hant": "文章目錄",
                            "zh-Hans": "文章目录",
                            "tto-bro": "VFHTeRZ VeFASe7A",
                            "tto": "SeCm D bS7Y",
                            "ja": "ブログリスト",
                            "de": "Blogliste",
                        },
                        lang
                    )}
                </Typography>
                {ids &&
                    blogs &&
                    titleTranslations &&
                    ids.map(id => (
                        <BlogListItem
                            key={id}
                            id={id}
                            blogs={blogs!}
                            lang={lang}
                            titleTranslations={titleTranslations!}
                        />
                    ))}
            </Stack>
        </Container>
    );
}
