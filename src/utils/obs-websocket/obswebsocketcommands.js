import OBSWebSocket from 'obs-websocket-js';
import obsConnect from './obswebsocket.js';
import {obsWebSocketIP, obsWebSocketPort } from '../../../config/websocket-config.js';
import { obs } from '../../../index.js';



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



const saveReplayBuffer = async() => {
  try {
    await obs.call('SaveReplayBuffer');
  } catch(error) {
    console.error(`ERROR: ${error.code} ${error.message}`)
  }

}

const toggleReplayBuffer = async() => {
  let toggleReplayBufferData
    try {
      toggleReplayBufferData = await obs.call('ToggleReplayBuffer');
      console.log(toggleReplayBufferData)
  } catch(error) {
      console.error(`ERROR: ${error.code} ${error.message}`)
    }
  }

const GetReplayBufferStatus = async() => {
  let getReplayBufferData
    try {
      getReplayBufferData = await obs.call('GetReplayBufferStatus');
      console.log(getReplayBufferData)
  } catch(error) {
      console.error(`ERROR: ${error.code} ${error.message}`)
    }
  }

const GetLastReplayBufferClip = async() => {
  let replayBufferClipData
  try {
    replayBufferClipData = await obs.call('GetLastReplayBufferReplay');
    console.log(replayBufferClipData)
  } catch(error) {
    console.error(`ERROR: ${error.code} ${error.message}`)
  }
}  




export {
    updateSource,
    saveReplayBuffer,
    toggleReplayBuffer,
    GetReplayBufferStatus,
    GetLastReplayBufferClip,

}