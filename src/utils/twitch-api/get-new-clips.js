import request from 'postman-request';
import RFCDate from '../get-date.js';

// returns array of objects containing twitch clip return body
export default function getNewClips(oauth, clipsURL, clientID, broadcastID, callback) {

    let clipData; 


    // FTUB make this URL builder more dynamic later
    let requestURL = clipsURL + "?broadcaster_id=" + broadcastID + "&first=20" + "&started_at=" + RFCDate(7)
    
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
        //     console.log(i.video_id)
        //     })
        })

    return clipData
}