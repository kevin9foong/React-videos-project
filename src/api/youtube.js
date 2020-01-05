import axios from "axios"; 

const KEY = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
            params : {
            parts: 'snippet', //part tells API what info we want to retrieve 
           //about each vid - snippet summary of the vid incl title,desc,link to vid
            maxResults : 5, 
            key : KEY,
            type: 'video'
        }
    })
    