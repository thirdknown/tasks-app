import React from 'react';
import NewItem from "./NewItem";

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.onItemCreate = this.onItemCreate.bind(this);
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
                <ul>{itemList}</ul>
            </div>
        )
    }

    renderItem(todoItemEntity) {
        return <li key={todoItemEntity.id}>{todoItemEntity.name}</li>
    }

    onItemCreate(todoItemEntity) {
        this.setState((previousState) => {
            return {state: previousState.todoItemEntities.push(todoItemEntity)}
        })
    }

}

export default TodoList;
