import dotenv from 'dotenv'
import OBSWebSocket from 'obs-websocket-js';
import generateOauth from './utils/twitch-api/generate-oauth.js';
import { obsSocketConnect } from './utils/obs-websocket/websocket-handler.js';
import startUp from './starting-up.js';
import getNewClips from './utils/twitch-api/get-new-clips.js';
import { tokenURL } from '../config/twitch-api-config.js';
import { obsWebSocketIP, obsWebSocketPort } from '../config/websocket-config.js';
// import { obs } from './src/utils/obs-websocket/obswebsocket.js';
import { toggleReplayBuffer } from './utils/obs-websocket/obswebsocketcommands.js';
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

var accessToken
const obs = new OBSWebSocket();
obs.on('ConnectionOpened', async() => {
    console.log("DOGGIES")
    accessToken = await generateOauth(tokenURL, clientID, clientSecret, (res) => {
        // set global variable to accessToken (probably shouldn't do this...)
        accessToken = res.body.access_token
    });
})

// const obs = await obsSocketConnect();



// run on initial setup 
// startUp()
// console.log(`outside access token ${accessToken}`)


// global token to be used in requests
// CITT add condition to check if token already exists to prevent from always generating new ones

// startUp()


//// TESTING: 

await obs.connect(`ws://${obsWebSocketIP}:${obsWebSocketPort}`).then(
            () => {
                console.log("Connected to OBS")
            }
        )

setTimeout(() => {
    toggleReplayBuffer()
}, 1500)


// RTST change to event handled execution. setTimeout for testing
setTimeout(() => {
    getNewClips(accessToken, clipsURL, clientID, broadcastID, (err, res, body) => {
    if(err) {
        return console.log(err);
    }
    })
}, 2000)

export {
    obs
}