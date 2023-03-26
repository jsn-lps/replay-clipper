import OBSWebSocket from 'obs-websocket-js';

export async function updateSource() {
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

