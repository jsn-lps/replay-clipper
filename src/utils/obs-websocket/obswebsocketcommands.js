import OBSWebSocket from 'obs-websocket-js';
import obsConnect from './obswebsocket.js';
import {obsWebSocketIP, obsWebSocketPort } from '../../../config/websocket-config.js';


 const updateSource = async() => {
    try {
        await obs.call('SetInputSettings', {
            'inputName': 'Example Title',
            'inputSettings': {
            'text': 'Hello FOOD!'
            }
        });
    } catch(error) {
        console.error(`Couldn't update source: ${error.code} ${error.message}`)
    }
}

// GetReplayBufferStatus won't resolve for some reason. Maybe OBS 29 doesn't support? 
const checkReplayBufferStatus = async() => {
    const request = {
        'request': 'GetReplayBufferStatus',
        'message-id': 'get-replay-buffer-status',
        'params': {},
      };

    try {
        obs.call(request)
        .then((data) => {
          console.log('Replay buffer status:', data);
          if (!data.isReplayBufferActive) {
            console.log('Enabling replay buffer...');
            obs.send('StartReplayBuffer');
          }
        })
        .catch((error) => {
          console.error('Error retrieving replay buffer status:', error);
        });
    } catch(error) {
        console.error(`Couldn't update source: ${error.code} ${error.message}`)
    }
}


const {saveReplayBuffer} = await obs.call('SaveReplayBuffer');
console.log(saveReplayBuffer)

/* Write functions for these
ToggleReplayBuffer
SaveReplayBuffer | 
*/  


export {
    updateSource,
    checkReplayBufferStatus

}