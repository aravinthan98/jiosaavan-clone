import React from 'react'
import Topnavbar from '../topNavBar'
import SideNavbar from '../sideNavbar/sideNavbar'
import LiveMusic from '../musicBar'

const Layout = ({children}) => {
  return (
    <div><Topnavbar/><div className='maincontent_page'>
    <SideNavbar/>
    <div className='main-page'>
       {children}
    <Footer/>
    </div></div>
    <LiveMusic />
    </div>
  )
}

export default Layout
