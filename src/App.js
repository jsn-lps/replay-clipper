import './App.css';
import React, { useState } from 'react';
import { tokenURL, clipsURL } from './config/twitch-api-config';
import generateOauth from './utils/twitch-api/generate-oauth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ReplayClipper />


      </header>
    </div>
  );
}

export default App;




let obsWebSocket = {
  accessToken: 'banana',
  obsWebSocketIP: "192.168.1.228",
  obsWebSocketPort: "4455",
  tokenURL: tokenURL,
  clipsURL: clipsURL,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
}



// TESTING 
function ReplayClipper(props) {
  return <body class="PageWrapper"><MainWindow/></body>;
}

function MainWindow(props) {

  return <body class="BodyContainer" >
    <Navigation/>
    <HubTab/>
    
    </body>;
}


// change to grid
function Navigation(props) {
  return <div>
    <ul class="NavBar">
      <li class='NavElement'>Hub</li>
      <li class='NavElement'>Clips</li>

    </ul>
  </div>
}





function HubTab(props) {

  const [checked, setChecked] = useState(false);

  // add function to change replay buffer to enabled / disabled
  function handleReplayBufferToggleChange(event) {
    setChecked(event.target.checked);
    if (event.target.checked) {
      console.log("enabled")
    } else {
      console.log("disabled")
    }
    
    }

    return <div class="ContentWindow">
      <div class='leftContent'>
      BANANA
      </div>


      <div class='rightContent'>

      {/*  replay buffer status window */}
        <div class="replayBufferStatus">Replay Buffer Status:
        <label class="switch">
          <input name="toggleReplayBuffer" type="checkbox" checked={checked} onChange={handleReplayBufferToggleChange}/>
            <span class="button"></span>
          </label>
          </div>

        <div></div>
      </div>
    </div>

}


function ReplayBufferStatusToggle (props) {

    

  return <div>

  </div>
}