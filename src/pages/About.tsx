import { Container } from "@mui/material";
import "purecss/build/pure.css";
import * as React from "react";
import { useEffect, useState } from "react";
import MyMuiMarkdown from "../components/MyMuiMarkdown";
import { getLocaleText, I18nText } from "../utils/I18n";
import "../styles.scss";

export default function About(props: { lang: keyof I18nText }) {
    const { lang } = props;
    const [markdown, setMarkdown] = useState<string>("Loading");
    const fileName: I18nText = {
        "en": "2023-0224.about-me.About_Me.en.life.md",
        "zh-Hans": "2023-0224.about-me.关于我.zh-Hans.life.md",
        "zh-Hant": "2023-0224.about-me.關於我.zh-Hant.life.md",
        "ja": "2023-0224.about-me.私について.ja.life.md",
        "de": "2023-0224.about-me.Über_Mich.de.life.md",
        "tto": "2023-0224.about-me.aCLqSqv.tto.life.md",
        "tto-bro": "2023-0224.about-me.YQnrHOei_Zm2.tto-bro.life.md",
    };

    const fetchAbout = async () => {
        const text = await (
            await fetch("https://raw.githubusercontent.com/pustot/blog/main/" + getLocaleText(fileName, lang))
        ).text();
        setMarkdown(text);
        console.log("Markdown got");
    };

    useEffect(() => {
        fetchAbout();
    }, [lang]);

    return (
        <Container maxWidth="md">
            <MyMuiMarkdown markdown={markdown} />
        </Container>
    );
}
