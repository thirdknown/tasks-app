import React from 'react';
import ReactDom from 'react-dom';

class TodoItem extends React.Component {

    render() {
        return(
            <div>{this.props.todoItemEntity.name}</div>
        )
    }

}

export default TodoItem;
