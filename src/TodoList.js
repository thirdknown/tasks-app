import React from 'react';
import NewItem from "./NewItem";
import TodoItem from "./TodoItem";
import Calls from "./model/Calls";

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.onItemCreate = this.onItemCreate.bind(this);
        this.onItemDelete = this.onItemDelete.bind(this);
        this.onItemEdit = this.onItemEdit.bind(this);
        this.renderItems = this.renderItems.bind(this);

        this.state = {
            todoItemEntities: []
        };
    }

    async componentDidMount() {
        const todoItemEntities = await Calls.getShoppingList();
        this.setState({
            todoItemEntities: todoItemEntities
        });
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
                <div>{this.state.todoItemEntities.length > 0 ? 'Aktuální počet položek: ' + this.state.todoItemEntities.length : ''}</div>
                <ul>{itemList}</ul>
            </div>
        )
    }

    renderItem(todoItemEntity) {
        return (
            <li key={todoItemEntity.id}>
                <TodoItem todoItemEntity={todoItemEntity} onItemDelete={this.onItemDelete} onItemEdit={this.onItemEdit} />
            </li>
        )
    }

    async onItemCreate(todoItemEntity) {
        todoItemEntity = await Calls.createShoppingItem(todoItemEntity);

        this.setState((previousState) => {
            previousState.todoItemEntities.push(todoItemEntity);
            return {todoItemEntities: previousState.todoItemEntities}
        });
    }

    async onItemDelete(todoItemEntityForDelete) {

        todoItemEntityForDelete = await Calls.deleteShoppingItem(todoItemEntityForDelete);

        this.setState((previousState) => {
            return {todoItemEntities: previousState.todoItemEntities.filter((todoItemEntity) => {
                return todoItemEntity.id !== todoItemEntityForDelete.id;
            })}
        })
    }

    async onItemEdit(todoItemEntity) {
        todoItemEntity = await Calls.updateShoppingItem(todoItemEntity);
    }

}

export default TodoList;
