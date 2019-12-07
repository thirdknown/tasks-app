import React from 'react';
import NewItem from "./NewItem";
import TodoItem from "./TodoItem";
import Calls from "./model/Calls";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import PaperWrapper from "./PaperWrapper";
import Search from "./Search";
import Items from "./Items";

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.onItemCreate = this.onItemCreate.bind(this);
        this.onItemDelete = this.onItemDelete.bind(this);
        this.onItemEdit = this.onItemEdit.bind(this);

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
            <Container maxWidth="lg">

                <br />

                <Grid container spacing={2} justify="space-evenly">
                    <Grid item xs>
                        <Header />
                    </Grid>
                    <Grid item xs>
                        <PaperWrapper>
                            <NewItem onItemCreate={this.onItemCreate} />
                        </PaperWrapper>
                    </Grid>
                    <Grid item xs style={{textAlign: 'center'}}>
                        <PaperWrapper>
                            <Search />
                        </PaperWrapper>
                    </Grid>
                </Grid>

                <br />

                <Items todoItemEntities={this.state.todoItemEntities} onItemDelete={this.onItemDelete} onItemEdit={this.onItemEdit} />

            </Container>
        )
    }

    renderItem(todoItemEntity) {
        return (
            <li key={todoItemEntity.id}>
                <TodoItem todoItemEntity={todoItemEntity} />
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
