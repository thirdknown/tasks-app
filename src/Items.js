import React from "react";
import TodoItem from "./TodoItem";
import Grid from "@material-ui/core/Grid";

const Items = (props) => {
    return (
        <Grid container spacing={2} justify="center">
            {props.todoItemEntities.map(todoItemEntity => (
                <Grid item xs={12} sm={6} md={4} key={todoItemEntity.id}>
                    <TodoItem todoItemEntity={todoItemEntity} onItemDelete={props.onItemDelete} onItemEdit={props.onItemEdit} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Items;
