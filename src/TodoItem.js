import React from 'react';
import ReactDom from 'react-dom';

class TodoItem extends React.Component {

    render() {
        return(
            <div>
                {this.props.todoItemEntity.name}
                <button onClick={() => this.props.onItemDelete(this.props.todoItemEntity)}>Smazat</button>
            </div>
        )
    }

}

export default TodoItem;
