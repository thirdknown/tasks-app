import React from 'react';
import ReactDom from 'react-dom';

class TodoItem extends React.Component {

    MODE_SHOW = 'show';
    MODE_EDIT = 'edit';

    constructor(props) {
        super(props);

        this.state = {
            mode: this.MODE_SHOW,
            todoItemEntity: this.props.todoItemEntity
        };

        this.toggleMode = this.toggleMode.bind(this);
        this.onNameEdit = this.onNameEdit.bind(this);
    }

    toggleMode() {

        this.setState((previousState) => {
            return {mode: previousState.mode === this.MODE_SHOW ? this.MODE_EDIT : this.MODE_SHOW}
        });
    }

    onNameEdit(e) {
        e.persist();
        this.setState((previousState) => {
            let todoItemEntity = previousState.todoItemEntity;
            todoItemEntity.name = e.target.value;
            return {todoItemEntity: todoItemEntity}
        });

        this.props.onItemEdit(this.state.todoItemEntity);
    }

    render() {
        const contentForShowMode =
            <div>
                {this.props.todoItemEntity.name}
                <button onClick={this.toggleMode}>Editovat</button>
                <button onClick={() => this.props.onItemDelete(this.props.todoItemEntity)}>Smazat</button>
            </div>

        const contentForEditMode =
            <div>
                <input type="text" onChange={this.onNameEdit} value={this.state.todoItemEntity.name} />
                <button onClick={this.toggleMode}>Konec editace</button>
            </div>

        return this.state.mode === this.MODE_SHOW ? contentForShowMode : contentForEditMode;
    }

}

export default TodoItem;
