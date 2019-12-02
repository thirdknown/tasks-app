import React from 'react';
import TodoItemEntity from "./model/TodoItemEntity";

class NewItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onItemCreate(new TodoItemEntity(this.state.text));
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.text} />
                <input type="submit" />
            </form>
        </div>
        )
    }

}

export default NewItem;
