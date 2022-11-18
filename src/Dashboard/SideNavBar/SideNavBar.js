import React from 'react'
import Frame from './Frame.png';
import { Link } from "react-router-dom";
import { MdHome} from "react-icons/md";
import { Box, Icon, Stack } from '@mui/material';
import './SideNavBar.css';
import {  PeopleAltRounded, VolumeUpRounded } from '@mui/icons-material';
import { BiBasket } from "react-icons/bi";

function SideNavBar() {
  return (
    <div className='sidenavbar'>
        <img src={Frame} alt='frame' className='logo'/>
        <ul>
        <Link style={{textDecoration: 'none',color:'white'}} to="/home">
            <li className='sidebarListItem'>
               <Icon><MdHome/></Icon>
                <p>Home</p>
            </li>
        </Link>  
        <Link style={{textDecoration: 'none',color:'white'}} to="/campaigns">  
            <li className='sidebarListItem'>
            <Icon><VolumeUpRounded/></Icon>
              <p>Campaigns</p>
            </li>
        </Link>  
            <li>
            <Icon><BiBasket/></Icon>
              <p>Products</p>
            </li>
            <li>
            <Icon><PeopleAltRounded/></Icon>
              <p>Customers</p>
            </li>
        </ul>
        
        
        </div>
  )
}

export default SideNavBar