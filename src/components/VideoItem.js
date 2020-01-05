import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect, selectedVideo}) => {
    if (video !== selectedVideo) {
    return (
        <div className="video-item item" onClick={()=> onVideoSelect(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className="content" >
                <h4 className="ui grey header" >{video.snippet.title}</h4>
                </div>
        </div>
    )
    } else {
        return (
            <div className="video-item item" onClick={()=> onVideoSelect(video)}>
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
                <div className="content" >
                    <div>Now playing -</div>
                    <h4 className="ui header" >{video.snippet.title}</h4>
                    </div>
            </div>
        )
    }
}

export default VideoItem; 