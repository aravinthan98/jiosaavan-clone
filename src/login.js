
import React from "react";
import './login.css';
import jioSaavnLogo from '../src/assets/jioSaavnLogo.png'
function LoginPage(){
    return (
        <div className="login-container">
            <div className="left-container">
                <img className="lo-logo" src={jioSaavnLogo} alt="log-logo"/>
                <div className="avatar-container">
                    <img className="avatar" src="https://staticfe.saavn.com/web6/jioindw/dist/1693459402/_i/artist/Nucleya.png" alt="login-logo"/>
                    <h2 className="avatar-text">All Your Music.</h2>
                    <em className="avatar-text-secondary">Anytime, anywhere.</em>
                </div>
            </div>
            <div className="right-container">
                <div className="account">
                    Don't have a JioSaavn account yet?<button className="login-btn">Sign Up</button>
                </div>
                <div className="login-form">
                    <h1>Welcome to JioSaavn.</h1>
                    <p className="loginpara">Log in or sign up with your mobile number.</p>
                    <input className="loginput" type="email" placeholder="Email Address"/>
                    <br/>
                    <input className="loginput" type="password" placeholder="Password"/>
                    <br/>
                    <input className="loginput" type="text" placeholder="Confirm Password"/>
                    <br/>
                    <div class="capta-container">
                        <div className="input-l">
                        <input type="checkbox" className="checkbox"/>
                        <p>I'm not a robot</p>
                        </div>
                    <div className="input-r">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png"/>
                    <p className="recaptcha">reCAPTCHA <br/><span>Privacy-Terms</span></p>      
                    </div>
                    </div>
                    <button className="submit-btn" type="submit">Continue</button>
                    <p className="em">By selecting ‘Continue’, you agree to JioSaavn’s Terms of Service and Privacy Policy.</p>
                  
                    <hr class="hr-text" data-content="OR CONTINUE WITH"></hr>
                    <div className="social-app">
                        <button className="social mobile">Mobile Number</button>
                        <button className="social facebook">Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;