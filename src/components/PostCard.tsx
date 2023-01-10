import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function PostCard(props: {
    image: string;
    alt: string;
    title: string | undefined;
    main: string;
    toLink: string;
}) {
    const { image, alt, title, main, toLink } = props;

    return (
        <Card onClick={() => window.open(toLink)}>
            <CardActionArea>
                <CardMedia component="img" image={image} alt={alt} height="200" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {main}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
