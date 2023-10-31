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
import MobileNavbar from './mobileNavbar/mobileNavbar'
import FloatingNavbar from '../components/flottingNavbar/FloatingNavbar';
import MobileTopNavbar from './mobileNavbar/MobiletopNavbar'




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
    <div className='layout'>
      {pathname==='/'&&
      <MobileTopNavbar/>
      }
      {!pathname.includes('my-music-sec')&&
        <Topnavbar />
      }   
      <>
        {
          !pathname.includes('/queue') &&
          <SideNavbar />
        }
        {children}
        {
          !pathname.includes('/queue') && <FloatingNavbar/>
        }
        {
          !pathname.includes('/queue') &&
          <Footer className='main-page'/>
        }
       
      </>
    
        <LiveMusic />
    
      
      {loginIndicator==='pre-login' && <LoginPageHover/>}
      {loginIndicator==='pre-signup' && <SignUpHover/>}
       {!pathname.includes('subscription')&&
      <MobileNavbar/>
      }
     
    </div>
  )
}

export default Layout