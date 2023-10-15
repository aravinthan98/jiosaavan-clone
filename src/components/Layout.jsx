import React from 'react'
import Topnavbar from './topNavbar/topNavBar'
import SideNavbar from './sideNavbar/sideNavbar'
import LiveMusic from './musicBar/musicBar'
import Footer from './footer/footer'
import { useLocation } from 'react-router'
import './Layout.css'
import LoginPageHover from './login-signup-hover/LoginHover';
import SignUpHover from './login-signup-hover/SignUpHover'
import { useCurrentPlayingContext } from '../context/currentlyPlayingContext';




const Layout = ({ children }) => {

  const { pathname } = useLocation();
  const {loginIndicator}=useCurrentPlayingContext();


  if (pathname.includes('login')) {
    return <> {children}</>;
  }
  if (pathname.includes('signup')) {
    return <> {children}</>;
  }
  if (pathname.includes('subscription')) {
    return <> {children}</>;

  }
  if (pathname.includes('/change-password')) {
    return <> {children}</>;

  }


    
  return (
    <div>
      <Topnavbar />
      <div className='maincontent_page'>
        {
          !pathname.includes('/queue') &&
          <SideNavbar />
        }
        {children}

          {
          !pathname.includes('/queue') &&
          <Footer className='main-page'/>
        }
       
      </div>
      <LiveMusic />
      {loginIndicator==='pre-login' && <LoginPageHover/>}
      {loginIndicator==='pre-signup' && <SignUpHover/>}
     
     
    </div>
  )
}

export default Layout