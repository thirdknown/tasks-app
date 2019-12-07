import React from 'react';
import TextField from "@material-ui/core/TextField";

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return <TextField label="Vyhledat" variant="outlined" onChange={this.handleChange} value={this.state.text} style={{width: '100%'}} />
    }

}

export default Search;
