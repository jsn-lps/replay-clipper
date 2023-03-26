import dotenv from 'dotenv'
import generateOauth from './src/utils/twitch-api/generate-oauth.js';
import startUp from './src/starting-up.js';
import getNewClips from './src/utils/twitch-api/get-new-clips.js';
import { tokenURL } from './config/twitch-api-config.js';
// import request from 'postman-request';
// import OBSWebSocket from 'obs-websocket-js';
// import obsConnect from './src/utils/obs-websocket/obswebsocket.js'
// import { obsWebSocketIP, obsWebSocketPort } from './src/config/websocket-config.js'

dotenv.config()

let clipsURL = process.env.CLIPS_URL
let broadcastID = process.env.BROADCASTER
let clientID = process.env.CLIENT_ID
let clientSecret = process.env.CLIENT_SECRET

// TODO: 
// FTUB 
// RTST 
// CITT

// run on initial setup 
// var accessToken = startUp()
// console.log(`outside access token ${accessToken}`)


// global token to be used in requests
// CITT add condition to check if token already exists to prevent from always generating new ones
var accessToken = generateOauth(tokenURL, clientID, clientSecret, (res) => {
    // set global variable to accessToken (probably shouldn't do this...)
    accessToken = res.body.access_token
});



// RTST change to event handled execution. setTimeout for testing
setTimeout(() => {
    getNewClips(accessToken, clipsURL, clientID, broadcastID, (err, res, body) => {
    if(err) {
        return console.log(err);
    }
    })
}, 2000)