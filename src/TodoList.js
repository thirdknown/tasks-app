import React from 'react';
import TodoItem from "./TodoItem";
import Calls from "./model/Calls";
import Container from "@material-ui/core/Container";
import Items from "./Items";
import TodosBar from "./TodosBar";
import NewItem from "./NewItem";
import PaperWrapper from "./PaperWrapper";
import Grid from "@material-ui/core/Grid";

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

            <div>
                <TodosBar />

                <Container maxWidth="lg">

                    <br /><br />

                    <Grid container justify="flex-end">
                        <Grid xs={12} sm={9} md={6} lg={4} item>
                            <PaperWrapper>
                                <NewItem onItemCreate={this.onItemCreate} />
                            </PaperWrapper>
                        </Grid>
                    </Grid>

                    <br /><br />

                    <Items todoItemEntities={this.state.todoItemEntities} onItemDelete={this.onItemDelete} onItemEdit={this.onItemEdit} />

                </Container>

                <br /><br />

            </div>
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
            const todoItemEntities = [todoItemEntity, ...previousState.todoItemEntities];
            return {todoItemEntities: todoItemEntities}
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
