import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';  
import MainVideo from './MainVideo'; 

class App extends React.Component{
    state = {videos : [], selectedVideo : null}; 

    componentDidMount() {
        this.onFormSubmit('music');
    }

    onVideoSelect = (video) => {
        console.log(this);
        console.log(video.snippet.title + " passed to App")
        this.setState({selectedVideo : video}); 
        // console.log(this.state.selectedVideo.snippet.title + " was selected in App.")
    }

    onFormSubmit = async (term) => {
        console.log("Searching for: " + term); // why is there a need for 2 inputs? 

        const response = await
            youtube.get('/search', {
                params: {
                q : term
                }
            }
        )
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]}); 

        console.log(this.state.videos);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit}/> 
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <MainVideo video ={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} selectedVideo={this.state.selectedVideo}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 