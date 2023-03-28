import OBSWebSocket from 'obs-websocket-js';

// connect to websocket and return object
const obsSocketConnect = async() => {
    const obs = new OBSWebSocket();
    obs.on('ConnectionOpened', () => {
        console.log("DOGGIES")

    })
    return obs
}

// univeral websocket calls WIP (low priority)

// takes a string. returns an object or string
const obsStatusCall = async(request) => {
    let obsCallData
    try {
        obsCallData = await obs.call(request);
      console.log(obsCallData)
  } catch(error) {
      console.error(`ERROR: ${error.code} ${error.message}`)
    }
    return obsCallData
}

// takes a string and an object. returns an object
const obsActionCall = async(request, params) => {

    const data = {
        'request': request,
        'message-id': 'toggle-replay-buffer',
        'params': {},
      };

      try {
        obsCallData = await obs.call(data, params);
      console.log(obsCallData)
  } catch(error) {
      console.error(`ERROR: ${error.code} ${error.message}`)
    }
    return obsCallData

}




export {
    obsSocketConnect
}