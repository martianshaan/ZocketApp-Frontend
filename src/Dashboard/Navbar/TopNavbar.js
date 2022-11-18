import React from 'react';
import './TopNavbar.css';
import { MdStore,MdCircleNotifications } from "react-icons/md";
import {AiOutlineCaretDown  } from "react-icons/ai";
import Cakeshop from './Cakeshop.png';
import { Icon, Typography } from '@mui/material';

function Navbar() {
  return (
    <div className='topnavbar'>
      <Typography variant='subtitle1' sx={{color:'rgba(0, 0, 0, 0.6)',mr:'10px'}}>Free Trail Ends in 2 days</Typography>
      <Typography variant='h6' sx={{color:'rgba(250, 140, 0, 1)',mr:'10px',backgroundColor:'rgba(242, 154, 46, 0.1)',p:'10px',borderRadius:"10px"}}>Buy Plan</Typography>
        <Icon sx={{color:'rgba(27, 63, 103, 1)',fontSize:'40px',mr:'10px'}}> <MdStore /></Icon>
        <Icon sx={{color:'rgba(27, 63, 103, 1)',fontSize:'40px',mr:'10px'}}><MdCircleNotifications/></Icon>
        <img src={Cakeshop} alt='cake' className='cake'/>
        <h1>Mukund cake shop</h1>
        <Icon><AiOutlineCaretDown/></Icon>
    </div>
  )
}

export default Navbar