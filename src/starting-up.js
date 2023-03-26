import obsConnect from './utils/obs-websocket/obswebsocket.js';
import { obsWebSocketIP, obsWebSocketPort } from '../config/websocket-config.js';
import OBSWebSocket from 'obs-websocket-js';
import generateOauth from './utils/twitch-api/generate-oauth.js';
import dotenv from 'dotenv'
import { tokenURL } from '../config/twitch-api-config.js';

dotenv.config()
// returns true or false 
// run on startup to ensure oauth generates properly and obs websocket can be conntected to 

export default async function startUp() {
    let clientID = process.env.CLIENT_ID;
    let clientSecret = process.env.CLIENT_SECRET;

    var accessToken = ''

    try { 
        await obsConnect(obsWebSocketIP, obsWebSocketPort)
            .then(
            console.log('Successfully connected!')
        )
        // .then(
        //     accessToken = generateOauth(tokenURL, clientID, clientSecret, (res) => {
        //         accessToken = res.body.access_token
        //         return accessToken
            // }))
        } catch(error) {
        console.log(error)
    }
}