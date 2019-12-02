import React from 'react';
import NewItem from "./NewItem";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.onItemCreate = this.onItemCreate.bind(this);
        this.onItemDelete = this.onItemDelete.bind(this);
        this.renderItems = this.renderItems.bind(this);

        this.state = {
            todoItemEntities: []
        };
    }

    render() {
        return (
            <div>
                <NewItem onItemCreate={this.onItemCreate} />
                {this.renderItems()}
            </div>
        )
    }

    renderItems() {

        let itemList = this.state.todoItemEntities.map((todoItemEntity) => {
            return this.renderItem(todoItemEntity);
        });

        return (
            <div>
                <div>Aktuální počet položek: {this.state.todoItemEntities.length}</div>
                <ul>{itemList}</ul>
            </div>
        )
    }

    renderItem(todoItemEntity) {
        return (
            <li key={todoItemEntity.id}>
                <TodoItem todoItemEntity={todoItemEntity} onItemDelete={this.onItemDelete} />
            </li>
        )
    }

    onItemCreate(todoItemEntity) {
        this.setState((previousState) => {
            previousState.todoItemEntities.push(todoItemEntity);
            return {todoItemEntities: previousState.todoItemEntities}
        })
    }

    onItemDelete(todoItemEntityForDelete) {
        this.setState((previousState) => {
            return {todoItemEntities: previousState.todoItemEntities.filter((todoItemEntity) => {
                return todoItemEntity.id !== todoItemEntityForDelete.id;
            })}
        })
    }

}

export default TodoList;
