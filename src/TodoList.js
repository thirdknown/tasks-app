import React from 'react';
import NewItem from "./NewItem";

class TodoList extends React.Component {

    render() {
        return (
            <div>
                <NewItem />
                {this.renderItems()}
            </div>
        )
    }

    renderItems() {
        return <>Todo items</>
    }

}

export default TodoList;
