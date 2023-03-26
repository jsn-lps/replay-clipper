import OBSWebSocket from 'obs-websocket-js';
/* 
docs 
https://github.com/obsproject/obs-websocket/blob/master/docs/generated/protocol.md#events


copy pasta quick start 
node .\src\obswebsocket.js
*/ 
const obs = new OBSWebSocket();


export default async function obsConnect(obsIP, port) {
    try {
        await obs.connect(`ws://${obsIP}:${port}`).then(
            () => {
                console.log("Connected to OBS")
            }
        )
    } catch(error) {
        console.error(`Failed to connect: ${error.code} ${error.messsage}`)
        return error.code, error.message
    }
}