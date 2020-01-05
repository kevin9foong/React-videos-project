import React from 'react'; 

class SearchBar extends React.Component{
    state = { term : ''}; 

    onInputChange = (event) => {
        this.setState({term : event.target.value});
    }

    onInputSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);

        //TODO: call callback from parent API to pass data as an argument. 
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onInputSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" onChange={this.onInputChange} value={this.state.term}/>
                    </div>
                </form>
            </div>
        ); 
    }
}

export default SearchBar;