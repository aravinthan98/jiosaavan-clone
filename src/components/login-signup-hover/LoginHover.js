
import React, {  useState } from "react";

import { Link } from "react-router-dom";
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import './LoginHover.css'
function LoginPageHover(){

    const{setLogin,profile,setProfile,setLoginIndicator}=useCurrentPlayingContext();

    
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[message,setMessage]=useState("");

    const[error,setError]=useState(false);
  
    const[checked,setChecked]=useState(false);
    const handleCheck=()=>{
        setChecked(!checked);
    }
 const handleClick=(e)=>{
   
    if( email && password&&checked){
       if(email.indexOf('@')===-1){       
          setMessage('Email is invalid'); 
          setError(true)       
       }
       else if(password.length<8){
        setMessage('Password must be at least 8 characters long')
        setError(true)
       }
       else{
        fetchAccount()
       }
          
    }
    else{   
       setMessage('All Fields must be filled');
       setError(true)
    }
   
    
 }
 

 const fetchAccount=()=>{
    var myHeaders = new Headers();
    myHeaders.append("projectId", "f104bi07c490");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "email": `${email}`,
      "password": `${password}`,
      "appType": "music"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://academics.newtonschool.co/api/v1/user/login", requestOptions)
      .then((response) => response.json())
      .then((result) =>{
        if(result.status=="success"){
            setLogin(true);
            setProfile({
                ...profile,
            userName: `${result.data.name}`,
            token:`${result.token}`
            })
            var myObject = {
                userName: `${result.data.name}`,
                token:`${result.token}` 
            };

            localStorage.setItem('userLogin', JSON.stringify(myObject));
          
            setLoginIndicator('no')
        }
        else{
            setMessage(result.message);
            setError(true)
        }
     
    })
      .catch(error => console.log('error', error));
 }
    const handleLoginInstant=(e)=>{
        e.stopPropagation()
        setLoginIndicator('pre-signup')
    }
    const handleInstantLogon=()=>{
        setLoginIndicator('no')
    }
    const handlePropagation=(e)=>{
        e.stopPropagation()
    }
    return (
        <aside className="loginhover-container" onClick={handleInstantLogon}>
            <div className="loginhover-center-container" onClick={(e)=>handlePropagation(e)} >
            <div className="loginhover-content">
                <div className="account-toggle">
                   <p> Don't have a JioSaavn account yet?</p><span className="toggle-btn" onClick={(e)=>handleLoginInstant(e)}>Sign Up</span>
                </div>
                <div className="hoverlogin-form">
                    <h1>Welcome to JioSaavn.</h1>
                    <p className="loginpara">Log in to create playlists, build your library, get personalized recommendations & more!</p>
                    <div className={error?"errorBox":"hiddenBox"}>{message}</div>
                    <input className="loginput" type="email" placeholder="Email Address" value={email} onChange={(e)=>(setEmail(e.target.value))} required/>
                    <br/>
                    <input className="loginput" type="password" placeholder="Password"  value={password} onChange={(e)=>(setPassword(e.target.value))} autoComplete="off" required/>
                    <br/>
                   
                    <div className="capta-container-hover">
                        <div className="input-l-hover">
                        <input type="checkbox" className="checkbox" value={checked} onChange={handleCheck}/>
                        <p>I'm not a robot</p>
                        </div>
                    <div className="input-r-hover">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha-logo"/>
                    <div className="recaptcha"><p>reCAPTCHA </p><p>Privacy-Terms</p></div>   
                    </div>
                    </div>
                    <button className="submit-btn-hover" type="submit" onClick={handleClick}>Continue</button>
                   <Link to="/change-password"><p className="changepassword">Change Password?</p></Link> 
                    <p className="em">By selecting ‘Continue’, you agree to JioSaavn’s Terms of Service and Privacy Policy.</p>
                
                </div>
            </div>
            </div>
        </aside>
    )
}
export default LoginPageHover;