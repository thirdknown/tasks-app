import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import MediaCardOwnContent from "./MediaCardOwnContent";

export default function MediaCard(props) {

    const content = <>
        <Typography gutterBottom variant="h5" component="h2">
            {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
        </Typography>
    </>

    return (
        <MediaCardOwnContent
            content={content}
            {...props}
        />
    );
}
