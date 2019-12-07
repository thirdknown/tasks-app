import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

export default function MediaCard(props) {
    return (
        <Card>
            <CardActionArea>
                <CardContent onClick={props.contentClicked}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container justify="space-between">
                    <Grid item>
                        {props.leftActions}
                    </Grid>
                    <Grid item>
                        {props.rightActions}
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}
