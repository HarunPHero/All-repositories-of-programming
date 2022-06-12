import React from "react";
import "../../App";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
const News = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, margin:5 }}>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            By {props.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default News;
