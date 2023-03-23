import OBSWebSocket from 'obs-websocket-js';

/* 
docs 
https://github.com/obsproject/obs-websocket/blob/master/docs/generated/protocol.md#events


copy pasta quick start 
node .\src\obswebsocket.js
*/ 

let obsWebSocketIP = "192.168.0.4" // my local IP <-- can change
let obsWebSocketPort = "4455" // default local port

const obs = new OBSWebSocket();

try {
    await obs.connect(`ws://192.168.0.4:4455`);
} catch (error) {
    console.error(`Failed to connect: ${error.code} ${error.messsage}`)
}

