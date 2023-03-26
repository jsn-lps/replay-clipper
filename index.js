import dotenv from 'dotenv'
// import request from 'postman-request';
import generateOauth from './src/utils/twitch-api/generate-oauth.js';
import OBSWebSocket from 'obs-websocket-js';
import obsConnect from './src/utils/obs-websocket/obswebsocket.js'
import getNewClips from './src/utils/twitch-api/get-new-clips.js';
import { obsWebSocketIP, obsWebSocketPort } from './src/config/websocket-config.js'

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

// replace later


await obsConnect(obsWebSocketIP, obsWebSocketPort)


// global token to be used in requests
// CITT add condition to check if token already exists to prevent from always generating new ones
var accessToken = ''
generateOauth(tokenURL, clientID, clientSecret, (res) => {
    accessToken = res.body.access_token
    return accessToken
});



// RTST change to event handled execution. setTimeout for testing
setTimeout(() => {
    getNewClips(accessToken, clipsURL, clientID, broadcastID, (err, res, body) => {
    if(err) {
        return console.log(err);
    }
    })
}, 1500)