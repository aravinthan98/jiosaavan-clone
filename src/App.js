
import './App.css';
import Topnavbar from './topNavBar.js';
import Maincontent from './mainContentPage.js';
import LiveMusic from './musicBar.js';
import LoginPage from './login.js';
import Queue from './queuePage/queue';
import { useState} from 'react';
function App() {

  const[click,setclick]=useState(false);
  const[login,setLogin]=useState(false);
  const funcclick=(prob)=>{
    setclick(prob)

  }
  const LoginAc=(prob)=>{
    setLogin(prob)
  }
if(login){
  return(
    <LoginPage/>
  )
}
  return (
    <div className="app">
      <Topnavbar logclicked={LoginAc}/>
      {click?
      <Queue/>:<Maincontent />
        
      }
      {/* <Queue/> */}
      <LiveMusic extendclicked={funcclick}/>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
