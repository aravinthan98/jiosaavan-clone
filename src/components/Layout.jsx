import React from 'react'
import Topnavbar from '../topNavBar'
import SideNavbar from '../sideNavbar/sideNavbar'
import LiveMusic from '../musicBar'
import Footer from '../footer/footer.js'
import { useLocation } from 'react-router'
import './Layout.css'


const Layout = ({ children }) => {

  const { pathname } = useLocation();
 

  if (pathname.includes('login')) {
    return <> {children}</>;
  }
  if (pathname.includes('subscription')) {
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
    </div>
  )
}

export default Layout