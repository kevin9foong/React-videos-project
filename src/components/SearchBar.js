import React from 'react'; 

class SearchBar extends React.Component{
    state = {term : ''} //JS object - allows us to re-render & store values we expect to be changed. 

    onInputChange = (term) => {
        // console.log(this); 
        console.log(term.target.value);
        this.setState({ term:term.target.value }); //Remember - setState is a method, which means you insert the changes into the parameters. 
    }

    onFormSubmit = (event) => {
        event.preventDefault(); //prevents the default action of submitting the form. 
        // console.log("Form submitted.");

        //execute prop method from parent here - callback method to pass value as argument. 
        this.props.onFormSubmit(this.state.term); 
    }

    render() {
        return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <label>Video Search</label>
                <input type="text" value={this.state.term} onChange={this.onInputChange} />
            </form>
        </div>
        )
    }
}
 
export default SearchBar; 