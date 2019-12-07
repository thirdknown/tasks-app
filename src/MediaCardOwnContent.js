import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";

export default function MediaCardOwnContent(props) {
    return (
        <Card>
            <CardActionArea>
                <CardContent onClick={props.contentClicked}>
                    {props.content}
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
