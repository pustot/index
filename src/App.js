import React, { useState, useEffect } from "react";
import "./styles.css";
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PostCard from "./components/PostCard";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';
import hanpoly from './assets/hanpoly.png'
import qieyunAutoderiver from './assets/qieyun-autoderiver.png'
import love from './assets/love.png'

export default function App() {

  const domain = "http://yangcx.tk/";

  return (
    <div>
      <Container maxWidth="sm">
      <Stack spacing={2}>
        <Typography  variant="h1">
          Chenxi Yang
        </Typography>

        <PostCard 
          image={qieyunAutoderiver}
          alt="Ethan Yang"
          title="Qieyun Autoderiver with Ttomni Rimduk"
          main="Forked from https://github.com/nk2028/qieyun-autoderiver, with my own
                Ttomni Rimduk (OQeVD8FA), which is used by my own Ttomni language."
          toLink={domain + "qieyun-autoderiver"} 
        />

        <PostCard 
          image={love}
          alt="Ethan Yang"
          title="Blogs of my love with Yuran He"
          main="Recording what we have experienced together."
          toLink={domain + "love"}
        />

        <PostCard 
          image={hanpoly}
          alt="Ethan Yang"
          title="HanPoly"
          main="Find the pronunciation of a Chinese character in multiple languages and dialects."
          toLink={domain + "hanpoly"}
        />

      </Stack>
      </Container>
    </div>
  );
}
