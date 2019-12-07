import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h4" component="h3">
                TODOs
            </Typography>
            <Typography component="p">
                Zaznamenávání vašich úkolů
            </Typography>
        </Paper>
    );
}
