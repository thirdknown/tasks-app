import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from "@material-ui/core/Checkbox";
import {Clear, Star, StarBorder, YoutubeSearchedFor} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    gap: {
        width: theme.spacing(1)
    }
}));

export default function TodosBar(props) {
    const classes = useStyles();

    const searchText = (e) => {
        let searchEntity = props.searchEntity;
        searchEntity.text = e.target.value;
        props.onSearch(searchEntity);
    };

    const toggleSearchDone = () => {
        let searchEntity = props.searchEntity;
        searchEntity.setNextValueForDone();
        props.onSearch(searchEntity);
    };

    const toggleSearchStarred = () => {
        let searchEntity = props.searchEntity;
        searchEntity.setNextValueForStarred();
        props.onSearch(searchEntity);
    };

    const getDoneCheckbox = () => {
        let searchEntity = props.searchEntity;
        return getCheckbox(searchEntity.done, toggleSearchDone);
    };

    const getStarredCheckbox = () => {
        let searchEntity = props.searchEntity;
        return getCheckbox(searchEntity.starred, toggleSearchStarred);
    };

    const getCheckbox = (value, onChange) => {
        let checkboxProps = {
            onChange: onChange,
            color: 'secondary',
            inputProps: { 'aria-label': 'default checkbox' }
        };

        if (value === null) {
            checkboxProps.checked = false;
        }

        if (value === false) {
            checkboxProps.checked = true;
            checkboxProps.indeterminate = true;
        }

        if (value === true) {
            checkboxProps.checked = true;
        }

        return <Checkbox {...checkboxProps} />
    }

    const onSearchReset = () => {
        let searchEntity = props.searchEntity;
        searchEntity.reset();
        props.onSearch(searchEntity);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        TODOs
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            value={props.searchEntity.text}
                            placeholder="Vyhledat…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'vyhledat' }}
                            onChange={searchText}
                        />
                    </div>

                    <div className={classes.gap} />

                    <div>
                        <span>Hotové: </span>
                        {getDoneCheckbox()}
                    </div>

                    <div className={classes.gap} />

                    <div>
                        <span>S hvězdou: </span>
                        {getStarredCheckbox()}
                    </div>

                    <div className={classes.gap} />

                    <div>
                        <Button variant="contained" size="small" color="secondary" onClick={onSearchReset}>
                            <Clear fontSize="small" />
                        </Button>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}
