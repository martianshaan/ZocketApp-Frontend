import React from 'react'
import Home from "./SideNavBar/Home/Home";
import SideNavBar from './SideNavBar/SideNavBar';
import TopNavbar from './Navbar/TopNavbar';
import '../Dashboard/Dashboard.css';
import {Route,Routes } from 'react-router-dom';
import Campaigns from './SideNavBar/Campaigns/Campaigns'
import NewCampaign from './SideNavBar/Campaigns/NewCampaign/NewCampaign';

function Dashboard() {
  return (
    <div className='dashboard'> 
     <div className='sidenavbar'>
        <SideNavBar/>
    </div>   
    <div className='right'>
        <div className='navbar'>
            <TopNavbar/>
        </div>
        <div className='home'>
        <Routes>
      <Route path="home" exact element={<Home/>}/>
      <Route path="campaigns" element={<Campaigns/>}/>
      <Route path="newcampaigns" element={<NewCampaign/>}/>  
      </Routes>
        </div>
    </div>
     </div>
  )
}

export default Dashboard