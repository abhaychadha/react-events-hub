import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import Facebook from '../facebook';

const CardBlock = props => {
    const {classes} = props;
    
    return <Card className={classes.card} md={12}>      
        <CardMedia
          component="img"
          alt="No Image"
          className={classes.media}
          height="140"
          image={props.imageUrl}
          title=""
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h4" component="h2">
            {props.title}
            <Facebook social={props.social}/>
          </Typography>
          
          <Typography gutterBottom variant="h5" component="h2">
            {props.body}
          </Typography>
          <a size="small" color="primary" href={props.link} rel="noopener noreferrer" target="_blank" className={classes.linkUrl}>
            Learn More
          </a>
        </CardContent>
    </Card>
}

export default CardBlock;