import request from 'postman-request';
import RFCDate from '../get-date.js';

/* returns array of objects containing twitch clip return body

array length is 



*/
    // FTUB make this URL builder more dynamic later
    // returns requestURL with parameters
const createClipsRequestURL = (clipsURL, broadcastID, numberOfClips, numberOfDaysBack) => {
    let requestURL = `${clipsURL}?broadcaster_id=${broadcastID}&first=${numberOfClips}&started_at=${RFCDate(numberOfDaysBack)}`
    return requestURL
}

export default function getNewClips(oauth, clipsURL, clientID, broadcastID, callback) {

    let clipData; 
    let requestURL = createClipsRequestURL(clipsURL, broadcastID, 20, 7)    

    const clipOptions = {
        url: requestURL,
        method: 'GET',
        headers:{
            "Authorization": "Bearer " + oauth,
            "Client-ID": clientID,
        }
    }
    request.get(clipOptions, (err, res, body) => {
        if(err) {
            return console.log(err);
        }
        clipData = JSON.parse(body).data
        // clipData.map(i => {
        //     console.log(i)
        //     })
        // console.log(body)
            // callback(res)
        })

    return clipData
}