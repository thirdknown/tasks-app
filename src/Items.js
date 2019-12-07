import React from "react";
import TodoItem from "./TodoItem";
import Grid from "@material-ui/core/Grid";

const Items = (props) => {
    return (
        <Grid container spacing={2}>
            {props.todoItemEntities.map(todoItemEntity => (
                <Grid item xs={3} key={todoItemEntity.id}>
                    <TodoItem todoItemEntity={todoItemEntity} onItemDelete={props.onItemDelete} onItemEdit={props.onItemEdit} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Items;
