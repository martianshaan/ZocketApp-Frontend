import { HomeMaxSharp } from '@mui/icons-material'
import { Icon, Typography ,Stack,Button} from '@mui/material'
import React from 'react'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { BiBasket } from "react-icons/bi";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckIcon from '@mui/icons-material/Check';
import '../NewCampaign/NewCampaign.css'


function NewCampaign() {
  return (
    <div className='newc'>
    <Typography variant='h4' sx={{color:'black',fontStyle:'bold',ml:'30px'}}>Your Ad Campaign</Typography>
    <Typography variant='subtitle1' sx={{color:'black',fontStyle:'bold',ml:'30px'}}> Launch your ad in just 4 easy steps </Typography>
    <Stack direction='row' sx={{mr:'20px'}} >
    </Stack>  
    <Stack direction='row' sx={{ml:'120px',alignItems:'center',mt:'30px',justifyContent:'space-between',
  }} className='step'>
 <EmojiObjectsIcon  sx={{ml:'20px',fontSize:"60px",backgroundColor:'orange',color:'white',borderRadius:'100px',p:'10px'}}/>
<Icon sx={{ml:'20px',fontSize:"60px",backgroundColor:'rgba(228, 234, 242, 1)',color:'rgba(171, 182, 197, 1)',borderRadius:'100px',p:'10px',alignItems:"center"}}><BiBasket /></Icon>
<CalendarMonthIcon sx={{ml:'20px',fontSize:"60px",backgroundColor:'rgba(228, 234, 242, 1)',color:'rgba(171, 182, 197, 1)',borderRadius:'100px',p:'10px',alignItems:"center"}}/>
<CheckIcon sx={{ml:'20px',fontSize:"60px",backgroundColor:'rgba(228, 234, 242, 1)',color:'rgba(171, 182, 197, 1)',borderRadius:'100px',p:'10px',alignItems:"center"}}/>
    </Stack>


  <Button variant='contained' sx={{mt:'200px',ml:'900px'}}>Continue</Button>
    </div>
  )
}

export default NewCampaign