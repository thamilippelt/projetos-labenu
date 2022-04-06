import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function RecipeCard(props) {
  return (
    <Card sx={{ maxWidth: 200 }} onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
          height="150"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}