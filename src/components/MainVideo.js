import React from 'react'; 

const MainVideo = ({video}) => {
    if (video != null) {
    return (
        <div>
            <div className="ui embed" >
                <iframe title="video player" src={`https://youtube.com/embed/${video.id.videoId}`} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>)
    }
    return <div>Loading...</div>
}

export default MainVideo;