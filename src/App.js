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
          image="Rebels-6698-512.png"
          alt="Ethan Yang"
          title="Qieyun Autoderiver with Ttomni Rimduk"
          main="Forked from https://github.com/nk2028/qieyun-autoderiver, with my own
                Ttomni Rimduk (OQeVD8FA), which is used by my own TTomni language."
          toLink={domain + "qieyun-autoderiver"} 
        />

      <PostCard 
          image="Rebels-6698-48.png"
          alt="Ethan Yang"
          title="Blogs of my love with Fannette He Yuran"
          main="Test"
          toLink="https://drasgarden.on.fleek.co/" 
        />

      </Stack>
      </Container>
    </div>
  );
}
