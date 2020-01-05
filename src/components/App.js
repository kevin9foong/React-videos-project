import React from 'react'; 
import youtubeAPI from "../api/youtube";
import SearchBar from './SearchBar';

class App extends React.Component{
    onSearchSubmit = (term) => {
        const response = youtubeAPI.get
        ("/search", {
        params: {
            q : term 
        }
    })
        console.log(response);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit = {this.onSearchSubmit}/> 
            </div>
        )
    }
}

export default App;