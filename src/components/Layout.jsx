import React from 'react'
import Topnavbar from '../topNavBar'
import SideNavbar from '../sideNavbar/sideNavbar'
import LiveMusic from '../musicBar'
import Footer from '../footer/footer'
import { useLocation } from 'react-router'


const Layout = ({ children }) => {

  const { pathname } = useLocation();
  console.log(pathname);

  if (pathname.includes('login')) {
    return { children };
  }

  return (
    <div>
      <Topnavbar />
      <div className='maincontent_page'>
        {
          !pathname.includes('/queue') &&
          <SideNavbar />
        }
        <div className='main-page'>
          {children}
          <Footer />
        </div>
      </div>
      <LiveMusic />
    </div>
  )
}

export default Layout
