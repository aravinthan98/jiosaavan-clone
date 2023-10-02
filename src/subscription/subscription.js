import React from "react";
import './subscription.css';
import {ImCheckmark} from 'react-icons/im';
import {RxCross2} from 'react-icons/rx';
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {GrSnapchat} from 'react-icons/gr';
import {GrYoutube} from 'react-icons/gr';
import {GoCircleSlash} from 'react-icons/go';
import {PiChalkboardBold} from 'react-icons/pi';
import {BsFiles} from 'react-icons/bs';
import {BsCloudArrowDown} from 'react-icons/bs';
import jioSaavnLogo from '../assets/jioSaavnLogo.png'
function Subscription(){
    return(
        <div className="subs-section">
            <div className="subs-section-top">

            <div className="subs-navbar">
            <img className="subs-logo" src={jioSaavnLogo} alt="jiosaavn-logo"/>
            
            <div className="subs-navbar-btns">
                <div><p className="subs boarder-styl">Redeem</p></div>
                <div><p className="subs ">MyAccount</p></div>
            </div>
           
            </div>
            <div className="subs-top-maincontainer">
                <p className="subs-top-title">All your music and JioTunes,<span>plus...</span></p>
                <h1 className="subs-top-title-2">Ad-free Music, Unlimited Downloads, Exclusive Original Content and <a href="#">More</a>.</h1>
                <div className="subs-top-card-container">
                    <div className="subs-card">
                        <div className="subs-container-head"><strong>JioSaavn</strong></div>
                        
                        <div className="subs-top-container">
                            <h2>1 Year</h2>
                            <p><strong>₹ 749* /Year</strong></p>
                            <p><strong><em>*Limited Period Offer</em></strong></p>
                            <div className="payment-type">
                                <div className="subs-amazon">
                                <input type="radio" id="amazon-1"/>
                                <label htmlFor="amazon-1">Pay with Amazon Pay</label>
                                </div>
                                <div className="subs-paytm">
                                <input type="radio" id="paytm-1"/>
                                <label htmlFor="paytm-1">Pay with Paytm</label>
                                </div>
                            </div>
                            <div className="sub-payment-btn">Get the Deal</div>
                        </div>
                        
                    </div>
                    <div className="subs-card choosed">
                        <div className="subs-container-head"><strong>JioSaavn</strong></div>         
                        <div className="subs-top-container">
                            <h2>1 Month</h2>
                            <p><strong>₹ 99 /Year</strong></p>
                            <p><strong><em>*offer </em></strong></p>
                            <div className="payment-type">
                                <div className="subs-amazon " id="notpick">
                                <input type="radio" id="amazon-1"/>
                                <label htmlFor="amazon-1">Pay with Amazon Pay</label>
                                </div>
                                <div className="subs-paytm " id="notpick">
                                <input type="radio" id="paytm-1"/>
                                <label htmlFor="paytm-1">Pay with Paytm</label>
                                </div>
                            </div>
                            <div className="sub-payment-btn " id="notclick">Buy Now</div>
                        </div>                 
                    </div>
                </div>
                <div className="subs-top-last-container">
                    <div><p><strong><em>Why go Pro? <span>Learn More</span></em></strong></p></div>
                    <div><img className="paytm-logo" src="https://static.saavncdn.com/_i/paytm-logo.png" alt="ptmlogo"/>
                    <img className="amazon-logo" src="https://static.saavncdn.com/_i/amazonPay-logo.png" alt="amznlogo"/></div>
                </div>
            </div>
            
            </div>
            <div className="subs-mid-container">
                <div className="subs-mid">
                    <div className="subs-mid-logo-top">
                        <img id="apple-logo" src="https://seeklogo.com/images/A/apple-logo-E3DBF3AE34-seeklogo.com.png"/>
                        <img src="https://seeklogo.com/images/G/google-play-logo-C0F8C12322-seeklogo.com.png"/>
                        <img src="https://seeklogo.com/images/J/jio-logo-3D80D8382D-seeklogo.com.png"/>
                    </div>
                    <h3><em>Listen on All of Your Favorite<br></br>
                        Devices and Platforms.</em>
                    </h3>
                    <div className="subs-mid-logo-bottom">
                        <img src="https://www.jiosaavn.com/_i/pro-revamp/sonos.png"/>
                        <img src="https://www.jiosaavn.com/_i/pro-revamp/alexa.png"/>
                        <img src="https://www.jiosaavn.com/_i/pro-revamp/googlehome.png"/>
                        
                    </div>
                </div>
            </div>
            <div className="subs-floting-container">
                <div className="subs-floting-card">
                    <span><GoCircleSlash/></span>
                    <h5>Ad-Free Music</h5>
                    <p>No interruptions. Just you and your music.</p>
                </div>
                <div className="subs-floting-card">
                    <span><PiChalkboardBold/></span>
                    <h5>Exclusive Content</h5>
                    <p>Original shows, podcasts, and content only on JioSaavn.</p>
                </div>
                <div className="subs-floting-card">
                <span><BsFiles/></span>
                    <h5>Hi-Fi Audio</h5>
                    <p>The highest quality music, plus Sonos and smart speakers.</p>
                </div>
                <div className="subs-floting-card">
                <span><BsCloudArrowDown/></span>
                    <h5>Unlimited Downloads</h5>
                    <p>Save data and listen offline, no internet required.</p>
                </div>
            </div>
            <div className="subs-mid-container2">
                <div className="subs-mid2">
                    <h3><em>Get Even More With Pro.</em></h3>
                    <table className="table-list">
                        <colgroup>
                        <col className="table-list-main" style={{width:"75%"}}/>
                        <col className="table-list-free" style={{width:"15%"}}/>
                        <col className="table-list-pro" style={{width:"15%"}}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th className="t-head first">Benefits</th>
                                <th className="t-head second">Free</th>
                                <th className="t-head third">Pro</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>80+ Million Songs</td>
                                <td id="freeget"><ImCheckmark/></td>
                                <td id="get"><ImCheckmark/></td>
                            </tr>
                            <tr>
                                <td>JioTunes</td>
                                <td id="freeget"><ImCheckmark/></td>
                                <td id="get"><ImCheckmark/></td>
                            </tr>
                            <tr>
                                <td>Recommendations</td>
                                <td id="freeget"><ImCheckmark/></td>
                                <td id="get"><ImCheckmark/></td>
                            </tr>
                            <tr>
                                <td>Ad-Free Music</td>
                                <td id="notget"><RxCross2/></td>
                                <td id="get"><ImCheckmark/></td>
                            </tr>
                            <tr>
                                <td>Unlimited Downloads</td>
                                <td id="notget"><RxCross2/></td>
                                <td id="get"><ImCheckmark/></td>
                            </tr>
                            <tr>
                                <td>Listen Offline</td>
                                <td id="notget"><RxCross2/></td>
                                <td id="get"><ImCheckmark/></td>
                            </tr>
                            <tr>
                                <td>Highest Quality Audio</td>
                                <td id="notget"><RxCross2/></td>
                                <td id="get"><ImCheckmark/></td>
                            </tr>
                            <tr>
                                <td>Exclusive & Original Content</td>
                                <td id="notget"><RxCross2/></td>
                                <td id="get"><ImCheckmark/></td>
                            </tr>
                            <tr>
                                <td>Listen on Sonos, Alexa & More</td>
                                <td id="notget"><RxCross2/></td>
                                <td id="get"><ImCheckmark/></td>
                            </tr>
                            <tr>
                                <td>Special Access & Offers</td>
                                <td id="notget"><RxCross2/></td>
                                <td id="get"><ImCheckmark/></td> 
                            </tr>
                            
                        </tbody>
                    </table>
                    <div className="subs-mid-container2-btom">
                        <h3><em>Try Pro Now</em></h3>
                        <h4>Make music beautiful.</h4>
                        <a className="subs-mid-btom-btn" href="#">Pick a Plan</a>
                    </div>
                </div>
            </div>
            <div className="subs-section-footer">
                <div className="subs-footer-sec">
                    <img src="https://play-lh.googleusercontent.com/gUR8xEKvCngapSZGkZUgoNETAYuhhkCr0Npza-lPSjbRCM55zdS0SK_KxBj1tg2RoQ" width="50px"/>
                    <div className="subs-footer-container">
                        <div className="subs-footer-card">
                            <h6>JioSaavn</h6>
                            <p>About</p>
                            <p>Careers</p>
                            <p>Logos & Guidelines</p>
                        </div>
                        <div className="subs-footer-card">
                            <h6>Products</h6>
                            <p>iOS</p>
                            <p>Android</p>
                            <p>Windows</p>
                            <p>Web Player</p>
                            <p>Sonos</p>
                        </div>
                        <div className="subs-footer-card">
                            <div>
                                <h6>Brands & Advertisers</h6>
                                <p>JioSaavn for Brands</p>
                                </div>
                            <div>
                                <h6>Gifts & Promotions</h6>
                                <p>Redeem Pro</p>
                            </div>
                        </div>
                        <div className="subs-footer-card">
                            <h6>Connect</h6>
                            <p>Help</p>
                            <p>Artists & Labels</p>
                            <p>Terms & Privacy</p>
                            <p>Contact</p>
                        </div>
                    </div>
                <div className="subs-copyrights">
                    <div className="subs-copyrights-socialmedia"><BsTwitter/><FaFacebookF/><BsInstagram/><GrSnapchat/><GrYoutube/></div>
                    <p>© 2023 Saavn Media Pvt Ltd. All rights reserved</p>

                </div>
                </div>
                <div className="fill angle"></div>
                <div className="fill"></div>

            </div>
        </div>
    )
}

export default Subscription;