import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const PaperWrapper = (props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography component="div">
                {props.children}
            </Typography>
        </Paper>
    );
};

export default PaperWrapper;
