
import React, { useEffect, useState } from "react";
import './login.css';
import jioSaavnLogo from '../../assets/jioSaavnLogo.png'
// import jioImage from '../../assets/JioSaavnIcon.png'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import jioMobileLogo from '../../assets/JioSaavn Logo on White.png'
function LoginPage(){

    const{setLogin,profile,setProfile}=useCurrentPlayingContext();

    const navigate=useNavigate();
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
          
            return navigate('/')
        }
        else{
            setMessage(result.message);
            setError(true)
        }
     
    })
      .catch(error => console.log('error', error));
 }

//  if(message==="pass"){
//     return navigate('/')
// }
 
    return (
        <div className="login-container">
            <div className="left-container">
            <Link to='/'><img className="lo-logo" src={jioSaavnLogo} alt="log-logo"/></Link>
                <div className="avatar-container">
                    <img className="avatar" src="https://staticfe.saavn.com/web6/jioindw/dist/1693459402/_i/artist/Nucleya.png" alt="login-logo"/>
                    <h2 className="avatar-text">All Your Music.</h2>
                    <em className="avatar-text-secondary">Anytime, anywhere.</em>
                </div>
            </div>
            <div className="right-container">
                <div className="account">
                   <p className="account-toggle-text">Don't have a JioSaavn account yet?</p><Link to='/signup'><button className="sign-btn">Sign Up</button></Link>
                </div>
                <div className="login-form">
                    <h1>Welcome to JioSaavn.</h1>
                    <p className="loginpara">Log in or sign up with your mobile number.</p>
                    <div className={error?"errorBox":"hiddenBox"}>{message}</div>
                    <input className="loginput" type="email" placeholder="Email Address" value={email} onChange={(e)=>(setEmail(e.target.value))} required/>
                    <br/>
                    <input className="loginput" type="password" placeholder="Password"  value={password} onChange={(e)=>(setPassword(e.target.value))} autoComplete="off" required/>
                    <br/>
                   
                    <div className="capta-container">
                        <div className="input-l">
                        <input type="checkbox" className="checkbox" value={checked} onChange={handleCheck}/>
                        <p>I'm not a robot</p>
                        </div>
                    <div className="input-r">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha-logo"/>
                    <p className="recaptcha">reCAPTCHA <br/><span>Privacy-Terms</span></p>      
                    </div>
                    </div>
                    <button className="submit-btn" type="submit" onClick={handleClick}>Continue</button>
                   <Link to="/change-password"><p className="changepassword">Change Password?</p></Link> 
                    <p className="em">By selecting ‘Continue’, you agree to JioSaavn’s Terms of Service and Privacy Policy.</p>
                  
                    {/* <hr className="hr-text" data-content="OR CONTINUE WITH"></hr>
                    <div className="social-app">
                        <button className="social mobile">Mobile Number</button>
                        <button className="social facebook">Facebook</button>
                    </div> */}
                </div>
            </div>
            <Link to='/'>
                
                <img className="jio-logo-log" src={jioMobileLogo} alt="log-logo"/>
        
                </Link>
                
        </div>
    )
}
export default LoginPage;