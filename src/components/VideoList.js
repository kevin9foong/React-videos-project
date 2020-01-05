import React from 'react'; 
import VideoItem from './VideoItem';

// const VideoList = ({ videos }) => { // destructuring of variable name with JS object. 
//     const videoList = videos.map(video => {
//         return <VideoItem video={video} />;
//     })

//     return <div>{videoList}</div>
// }

class VideoList extends React.Component{
    videoList () {
        const videoList = this.props.videos.map(video => {
                return <VideoItem key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect} selectedVideo={this.props.selectedVideo}/>;
        }
    )
        return videoList;
    }

    render() {
        return <div className="ui relaxed divided list">{this.videoList()}</div>
    }
}

export default VideoList;