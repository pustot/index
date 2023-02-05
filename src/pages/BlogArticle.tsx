import { Container, Typography } from "@mui/material";
import * as OpenCC from "opencc-js";
import "purecss/build/pure.css";
import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyMuiMarkdown from "../components/MyMuiMarkdown";
import { LangCode } from "../utils/I18n";
import "../styles.scss";

export default function BlogArticle(props: { lang: LangCode }) {
    const { lang } = props;
    const [markdown, setMarkdown] = useState<string>("Loading");

    const { fileName } = useParams();
    const [title, setTitle] = useState((fileName || "").split(".")[2].replaceAll("_", " "));

    const fetchContent = async () => {
        let text = await (await fetch("https://raw.githubusercontent.com/yangchnx/blog/main/" + fileName)).text();
        if (text == "") return;
        text = text.replaceAll("](./pic/", "](https://raw.githubusercontent.com/yangchnx/blog/main/pic/");
        let title = (fileName || "").split(".")[2].replaceAll("_", " ");

        // TODO: Skip Filenames and CJKVs not in Chinese
        // OpenCC Chinese Converter
        if ((fileName || "").split(".")[3] == "zh-Hans" && lang == "zh-Hant") {
            const converter = OpenCC.Converter({ from: "cn", to: "hk" });
            text = converter(text);
            title = converter(title);
        } else if ((fileName || "").split(".")[3] == "zh-Hant" && lang == "zh-Hans") {
            const converter = OpenCC.Converter({ from: "hk", to: "cn" });
            text = converter(text);
            title = converter(title);
        }
        setTitle(title);
        setMarkdown(text);
        console.log("Markdown got");
    };

    useEffect(() => {
        fetchContent();
    }, [lang]);

    return (
        <Container maxWidth="md">
            <Typography variant="h1" sx={{ fontSize: 56 }}>
                {title}
            </Typography>
            <br />
            <MyMuiMarkdown markdown={markdown} />
        </Container>
    );
}
