import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';


export default function ImgCard(props) {
  return (
    <Grid item xs="auto">
        <Card sx={{ maxWidth: 345,marginTop:"20px" }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={props.Img}
            alt="green iguana"
            />
        </CardActionArea>
        </Card>
    </Grid>

  );
}