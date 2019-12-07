import React from 'react';
import TodoItem from "./TodoItem";
import Calls from "./model/Calls";
import Container from "@material-ui/core/Container";
import Items from "./Items";
import TodosBar from "./TodosBar";
import NewItem from "./NewItem";
import PaperWrapper from "./PaperWrapper";
import Grid from "@material-ui/core/Grid";
import SearchEntity from "./model/SearchEntity";

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.onItemCreate = this.onItemCreate.bind(this);
        this.onItemDelete = this.onItemDelete.bind(this);
        this.onItemEdit = this.onItemEdit.bind(this);
        this.onSearch = this.onSearch.bind(this);

        this.state = {
            originalTodoItemEntities: [],
            todoItemEntities: [],
            searchEntity: new SearchEntity('', null, null)
        };
    }

    async componentDidMount() {
        const todoItemEntities = await Calls.getShoppingList();
        this.setState({
            originalTodoItemEntities: todoItemEntities,
            todoItemEntities: todoItemEntities
        });
    }

    render() {

        return (

            <div>
                <TodosBar searchEntity={this.state.searchEntity} onSearch={this.onSearch} />

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
            const originalTodoItemEntities = [todoItemEntity, ...previousState.originalTodoItemEntities];
            const todoItemEntities = [todoItemEntity, ...previousState.todoItemEntities];
            return {
                originalTodoItemEntities: originalTodoItemEntities,
                todoItemEntities: todoItemEntities
            }
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

    onSearch(searchEntity) {
        this.setState({
            searchEntity: searchEntity
        }, () => {
            let searchEntity = this.state.searchEntity;
            let filteredTodoItemEntities = this.state.originalTodoItemEntities.filter((todoItemEntity) => {

                let isSatisfing = true;

                if (searchEntity.starred !== null) {
                    isSatisfing = isSatisfing && searchEntity.starred === todoItemEntity.starred
                }

                if (searchEntity.done !== null) {
                    isSatisfing = isSatisfing && searchEntity.done === todoItemEntity.done
                }

                if (searchEntity.text !== '') {
                    const searchedText = searchEntity.text.toLowerCase();
                    isSatisfing = isSatisfing && (todoItemEntity.name.toLowerCase().match(searchedText)
                        || todoItemEntity.description.toLowerCase().match(searchedText))
                }

                return isSatisfing;
            });

            this.setState( {
                todoItemEntities: filteredTodoItemEntities
            });
        });
    }

}

export default TodoList;
