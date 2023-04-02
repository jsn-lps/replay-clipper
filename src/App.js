import logo from './logo.svg';
import './App.css';

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
      <li class='NavElement'>Config</li>
      <li class='NavElement'>About</li>
      <li class='NavElement'>Help</li>
    </ul>
  </div>
}

function HubTab(props) {
  return <div class="ContentWindow">
    IM STUFF
  </div>
}