import axios from 'axios';

const KEY = '//Google API Key'; 

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3', 
    params : {
        maxResults : 5, 
        key : KEY, 
        type : 'video', 
        part : 'snippet'
    }
})
