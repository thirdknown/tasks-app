import React from 'react';
import TodoItemEntity from "./model/TodoItemEntity";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

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
        this.props.onItemCreate(new TodoItemEntity(this.state.text, '', false));
        this.clearInput();
    }

    clearInput() {
        this.setState({
            text: ''
        })
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Box justify="center" m={1}>
                        <TextField label="Název nové položky" variant="outlined" onChange={this.handleChange} value={this.state.text} />
                    </Box>
                    <Grid />
                    <Box justifyContent="center" m={1}>
                        <Button type="submit" variant="contained" color="primary">Vytvořit</Button>
                    </Box>
                </Grid>
            </form>
        </div>
        )
    }

}

export default NewItem;
