import { Container, Typography } from "@mui/material";
import * as OpenCC from "opencc-js";
import "purecss/build/pure.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MyMuiMarkdown from "../components/MyMuiMarkdown";
import "../styles.scss";

export default function BlogArticle({ lang }) {
    const [markdown, setMarkdown] = React.useState("Loading");
    const { fileName } = useParams();

    const fetchContent = async () => {
        let text = await (
            await fetch(
                "https://raw.githubusercontent.com/yangchnx/blog/main/" + fileName
            )
        ).text();
        if (text == "") return;
        text = text.replaceAll(
            "](./pic/",
            "](https://raw.githubusercontent.com/yangchnx/blog/main/pic/"
        );

        // TODO: Skip Filenames and CJKVs not in Chinese
        // OpenCC Chinese Converter
        if (fileName.split(".")[3] == "zh-Hans" && lang == "zh-Hant") {
            const converter = OpenCC.Converter({ from: "cn", to: "hk" });
            text = converter(text);
        } else if (fileName.split(".")[3] == "zh-Hant" && lang == "zh-Hans") {
            const converter = OpenCC.Converter({ from: "hk", to: "cn" });
            text = converter(text);
        }
        setMarkdown(text);
        console.log("Markdown got");
    };

    useEffect(() => {
        fetchContent();
    }, [lang]);

    return (
        <Container maxWidth="md">
            <Typography variant="h1" sx={{ fontSize: 56 }}>
                {fileName.split(".")[2].replaceAll("_", " ")}
            </Typography>
            <br />
            <MyMuiMarkdown markdown={markdown} />
        </Container>
    );
}
