import "purecss/build/pure.css";
import React, { useState, useEffect } from "react";
import "../styles.scss";
import { 
  Container, Link as MuiLink, Stack, Typography
} from '@mui/material';
import {
  useParams,
} from 'react-router-dom';
import MuiMarkdown from 'mui-markdown';

export default function BlogArticle({ lang }) {
    const [markdown, setMarkdown] = React.useState('Loading');
    const { fileName } = useParams();

    const fetchContent = async () => {
        const text = await (await fetch('https://raw.githubusercontent.com/yangchnx/blog/main/' + fileName)).text();
        if (text == '') return;
        setMarkdown(text);
        console.log("Markdown got")
    }

    useEffect(() => {
        fetchContent();
    }, [lang]);

    return (
          <Container maxWidth="md">
            <MuiMarkdown overrides={{
              h6: { props: { style: { scrollMarginTop: "50px" }, }, },
              h5: { props: { style: { scrollMarginTop: "50px" }, }, },
              h4: { props: { style: { scrollMarginTop: "50px" }, }, },
              h3: {
                props: {
                  style: { fontSize: 38 },
                },
              },
              h2: {
                props: {
                  style: { fontSize: 46 },
                },
              },
              h1: {
                props: {
                  style: { fontSize: 56, scrollMarginTop: "50px" },
                },
              }
            }}>{markdown}</MuiMarkdown>
          </Container>
      );
};