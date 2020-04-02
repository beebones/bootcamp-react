import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search">
                <input placeholder="Qual gif você quer ver agora?" onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
} 

export default SearchBar;