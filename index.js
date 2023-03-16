import dotenv from 'dotenv'
import request from 'postman-request';

dotenv.config()

let clipsURL = process.env.CLIPS_URL
let broadcastID = process.env.BROADCASTER
let tokenURL = process.env.TOKEN_URL
let clientID = process.env.CLIENT_ID
let clientSecret = process.env.CLIENT_SECRET

// TODO: 
// FTUB 
// RTST 
// CITT

// get OAuth token 
const generateOauth = (url, callback) => {

    const options = {
        uri: tokenURL,
        json: true,
        body:{
            client_id: clientID,
            client_secret: clientSecret,
            grant_type: 'client_credentials'
        }
    };
    request.post(options, (err, res, body) => {
        if(err) {
                return console.log(err);
            }
        callback(res);
        }
    )
};

// global token to be used in requests
// CITT add condition to check if token already exists to prevent from always generating new ones
var accessToken = ''
generateOauth(tokenURL, (res) => {
    accessToken = res.body.access_token
    return accessToken
});

// returns array of objects containing clips data
const getNewClips = (oauth, callback) => {

    let clipData; 

    // date builder for RFC3339 compliance. Change to 1 after testing
    const date = new Date()
    date.setDate(new Date().getDate() - 7);
    const startDate = date.toISOString();

    // FTUB make this URL builder more dynamic later
    let requestURL = clipsURL + "?broadcaster_id=" + broadcastID + "&first=20" + "&started_at=" + startDate
    
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
        console.log(clipData)
        })
    return clipData
}

// RTST change to async/await later. setTimeout for testing
setTimeout(() => {
    getNewClips(accessToken, (err, res, body) => {
    if(err) {
        return console.log(err);
    }
    })
}, 1500)