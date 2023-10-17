import React from "react";
import './mobileNavbar.css';
import {GrHomeRounded} from 'react-icons/gr';
import {BiSearch} from 'react-icons/bi';
import {ImCompass2} from 'react-icons/im';
import {PiUser} from 'react-icons/pi'
import { Link } from "react-router-dom";

function MobileNavbar(){

    return(
        <div className="mobile-nav-container"> 
            <div className="mobile-nav">
                <div className="m-home">
                <p><GrHomeRounded/></p>
               <Link to='/'><span>Home</span></Link> 
                </div>
                <div className="m-serch">             
                <p><BiSearch/></p>
                <span>Search</span>
                </div>
                <div className="m-brws">
                <p><ImCompass2/></p>
                <span>Browse</span>
                </div>
                <div className="m-log">
                <p><PiUser/></p>
               <Link to='/login'><span>Login</span></Link> 
                </div>
                
            </div>
        </div>
    )
}

export default MobileNavbar;