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
    const [title, setTitle] = React.useState(fileName.split(".")[2].replaceAll("_", " "));

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
            setTitle(converter(fileName.split(".")[2].replaceAll("_", " ")));
        } else if (fileName.split(".")[3] == "zh-Hant" && lang == "zh-Hans") {
            const converter = OpenCC.Converter({ from: "hk", to: "cn" });
            text = converter(text);
            setTitle(converter(fileName.split(".")[2].replaceAll("_", " ")));
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
                {title}
            </Typography>
            <br />
            <MyMuiMarkdown markdown={markdown} />
        </Container>
    );
}
