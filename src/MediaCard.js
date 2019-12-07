import React from 'react';
import Typography from '@material-ui/core/Typography';
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
