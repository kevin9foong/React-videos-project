import axios from 'axios';

const KEY = 'AIzaSyCXDSmbp_Ftyh-ft5g--syuwBzaWDnZCq8'; 

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3', 
    params : {
        maxResults : 5, 
        key : KEY, 
        type : 'video', 
        part : 'snippet'
    }
})