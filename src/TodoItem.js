import React from 'react';
import MediaCard from "./MediaCard";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {Delete, StarBorder} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import MediaCardOwnContent from "./MediaCardOwnContent";
import Grid from "@material-ui/core/Grid";

class TodoItem extends React.Component {

    MODE_SHOW = 'show';
    MODE_EDIT = 'edit';

    constructor(props) {
        super(props);

        this.state = {
            mode: this.MODE_SHOW,
            todoItemEntity: this.props.todoItemEntity,
            draftTodoItemEntity: Object.assign({}, this.props.todoItemEntity)
        };

        this.enableEditMode = this.enableEditMode.bind(this);
        this.onNameEdit = this.onNameEdit.bind(this);
        this.onNameKeyDown = this.onNameKeyDown.bind(this);
        this.onDescriptionEdit = this.onDescriptionEdit.bind(this);
        this.onDescriptionKeyDown = this.onDescriptionKeyDown.bind(this);
        this.stornoEdit = this.stornoEdit.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
    }

    enableEditMode() {
        this.setState((previousState) => {
            return {
                mode: this.MODE_EDIT,
                previousTodoItemEntity: previousState.todoItemEntity
            }
        });
    }

    enableShowMode() {
        this.setState(() => {
            return {mode: this.MODE_SHOW};
        });
    }

    saveEdit() {
        this.setState((previousState) => {
            this.props.onItemEdit(previousState.draftTodoItemEntity);

            return {
                todoItemEntity: Object.assign({}, previousState.draftTodoItemEntity)
            }
        });
        this.enableShowMode();
    }

    stornoEdit() {
        this.setState((previousState) => {
            return {
                draftTodoItemEntity: Object.assign({}, previousState.todoItemEntity)
            }
        });
        this.enableShowMode();
    }

    onNameEdit(e) {
        e.persist();
        this.setState((previousState) => {
            let draftTodoItemEntity = previousState.draftTodoItemEntity;
            draftTodoItemEntity.name = e.target.value;
            return {draftTodoItemEntity: draftTodoItemEntity}
        });
    }

    onNameKeyDown(e) {
        switch (e.key) {
            case 'Enter':
                this.saveEdit();
                break;
            case 'Escape':
                this.stornoEdit();
                break;
            default: break
        }
    }

    onDescriptionEdit(e) {
        e.persist();
        this.setState((previousState) => {
            let draftTodoItemEntity = previousState.draftTodoItemEntity;
            draftTodoItemEntity.description = e.target.value;
            return {draftTodoItemEntity: draftTodoItemEntity}
        });
    }

    onDescriptionKeyDown(e) {
        if (e.key === 'Escape') {
            this.stornoEdit();
        }
    }

    renderShowMode() {
        const showModeRightActions = <div>
            <IconButton aria-label="star" size="small">
                <StarBorder />
            </IconButton>
        </div>

        return (
            <MediaCard
                title={this.state.todoItemEntity.name}
                description={this.state.todoItemEntity.description}
                leftActions=""
                rightActions={showModeRightActions}
                contentClicked={this.enableEditMode}
            />
        )
    }

    renderEditMode() {
        const content = <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    fullWidth
                    onChange={this.onNameEdit}
                    onKeyDown={this.onNameKeyDown}
                    value={this.state.draftTodoItemEntity.name}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    onChange={this.onDescriptionEdit}
                    onKeyDown={this.onDescriptionKeyDown}
                    value={this.state.draftTodoItemEntity.description}
                />
            </Grid>
        </Grid>

        const editModeLeftActions =
            <IconButton aria-label="delete" size="small" onClick={() => this.props.onItemDelete(this.state.todoItemEntity)}>
                <Delete />
            </IconButton>

        const editModeRightActions =
            <ButtonGroup size="small">
                <Button variant="contained" color="default" onClick={this.stornoEdit}>Storno</Button>
                <Button variant="contained" color="primary" onClick={this.saveEdit}>Uložit</Button>
            </ButtonGroup>

        return (
            <MediaCardOwnContent
                content={content}
                leftActions={editModeLeftActions}
                rightActions={editModeRightActions}
            />
        )
    }

    render() {
        return this.state.mode === this.MODE_SHOW ? this.renderShowMode() : this.renderEditMode();
    }
}

export default TodoItem;
