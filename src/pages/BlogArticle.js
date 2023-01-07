import "purecss/build/pure.css";
import React, { useState, useEffect } from "react";
import "../styles.scss";
import { 
  Container, Link as MuiLink, Stack, Typography
} from '@mui/material';
import {
  useParams,
} from 'react-router-dom';
import MyMuiMarkdown from "../components/MyMuiMarkdown";


export default function BlogArticle({ lang }) {
    const [markdown, setMarkdown] = React.useState('Loading');
    const { fileName } = useParams();

    const fetchContent = async () => {
        let text = await (await fetch('https://raw.githubusercontent.com/yangchnx/blog/main/' + fileName)).text();
        if (text == '') return;
        text = text.replaceAll('](./pic/', '](https://raw.githubusercontent.com/yangchnx/blog/main/pic/');
        setMarkdown(text);
        console.log("Markdown got")
    }

    useEffect(() => {
        fetchContent();
    }, [lang]);

    return (
          <Container maxWidth="md">
            <Typography  variant="h1" sx={{ fontSize: 56 }}>{fileName.split('.')[2].replaceAll('_', ' ')}</Typography>
            <br/>
            <MyMuiMarkdown markdown={markdown} />
          </Container>
      );
};