import React from "react";
import './footer.css';
import {RiFacebookBoxFill} from 'react-icons/ri';
import {AiOutlineTwitter} from 'react-icons/ai';
import {GrYoutube} from 'react-icons/gr';
import {BsInstagram} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';

function Footer(){



    return(
        <div className="footer-container">
       <div className="f-top ">
        <div>
            <h5>Top Artist</h5>
            <p>Neha Kakkar</p>
            <p>Arijit Singh</p>
            <p>Badshah</p>
            <p>Atif Aslam</p>
            <p>Justin Bieber</p>
            <p>Himesh Reshammiya</p>
            <p>Lata Mangeshkar</p>
            <p>Diljit Dosanjh</p>
            <p>Ed Sheeran</p>
            <p>Shreya Ghoshal</p>
            <p>Sanam Puri</p>
            <p>Armaan Malik</p>
        </div>
        <div>
        <h5>Top Actors</h5>
            <p>Salman Khan</p>
            <p>Allu Arjun</p>
            <p>Sunny Leone</p>
            <p>Amitabh Bachchan</p>
            <p>Varun Dhawan</p>
        <h5>BROWSE</h5>  
            <p>New Releases</p>
            <p>Featured Playlists</p>
            <p>Weekly Top Songs</p>
            <p>Top Artists</p>
            <p>Top Charts</p>
            <p>Top Radios</p>
        </div>
        <div>
        <h5>DEVOTIONAL SONGS</h5>
            <p>Krishna Bhajan</p>
            <p>Mahamrityunjaya</p>
            <p>Mantra</p>
            <p>Deva Shree Ganesha</p>
            <p>Hanuman Chalisa</p>
            <p>Gayatri Mantra</p>
            <p>Mata Ke Bhajan</p>
            <p>Durga Chalisa</p>
            <p>Maiya Yashoda</p>
            <p>Bhakti Geet</p>
        </div>
        <div>
        <h5>LANGUAGE</h5>
            <p>Hindi Songs</p>
            <p>Punjabi Songs</p>
            <p>Bhojpuri Songs</p>
            <p>Tamil Songs</p>
            <p>Telugu Songs</p>
            <p>Kannada Songs</p>
            <p>Gujarati Songs</p>
            <p>Marathi Songs</p>
            <p>Odia Songs</p>
            <p>Rajasthani Songs</p>
            <p>Haryanvi Songs</p>
            <p>Assamese Songs</p>
            <p>Malayalam Songs</p>
            <p>Bengali Songs</p>
        </div>
        <div>
        <h5>ARTIST ORIGINALS</h5>
            <p>Zaeden - Dooriyan</p>
            <p>Raghav - Sufi</p>
            <p>SIXK - Dansa</p>
            <p>Siri - My Jam</p>
            <p>Lost Stories, "Mai Ni</p>
            <p>Meriye"</p>
        </div>
        <div>
        <h5>COMPANY</h5>
            <p>About Us</p>
            <p>Culture</p>
            <p>Blog</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Advertise</p>
            <p>Terms & Privacy</p>
            <p>Help & Support</p>
            <p>Grievances</p>
            <p>JioSaavn Artist Insights</p>
            <p>JioSaavn YourCast</p>
        </div>
       </div>
       <div className="f-mid ">
            <p>JioSaavn Pro</p>
            <p>JioSaavn for iOS</p>
            <p>JioSaavn for Android</p>
            <p>New Releases</p>
       </div>
       <div className="f-last ">
       <div className="f-comment"><p>© 2023 Saavn Media Limited All rights reserved.</p></div>
       <div className="f-social-media">
        <p>FOLLOW US</p>
        <RiFacebookBoxFill id="f-facebook"/>
        <AiOutlineTwitter id="f-twitter"/>
        <GrYoutube id="f-youtube"/>
       <BsInstagram id="f-instagram"/>
       <FaLinkedin id="f-linkedin"/>
       </div>
       
       </div>
    </div>
    )
}

export default Footer;