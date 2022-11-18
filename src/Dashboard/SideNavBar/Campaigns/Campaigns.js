import { Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import {IoIosAddCircleOutline  } from "react-icons/io";
import '../Campaigns/Campaigns.css'
import { DataGrid,gridClasses ,GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useNavigate} from "react-router-dom";

function Campaigns() {
  
  
  function QuickSearchToolbar() {
    return (
    
        <GridToolbarQuickFilter 
        sx={{ml:{xs:'50px',sm:'100px',md:'815px'},
        width: {xs:'200px',sm:'300px',md:'250px'},
        background: "#fff",
      width: '200px',
      height: '40px',
      border: '10px',
      borderRadius: '80px',
      borderColor: 'primary',
      pl:'20px',
      pr:'20px',
      pt:'10px'
        }}/>
    )};


  const Datagridstyle={
    width:{xs:370,sm:550,md:1200},
    fontSize:'20px',
      m:{xs:'auto',sm:'auto',md:'auto',xl:'auto'},
      ml:{xs:'10px',sm:'30px',md:'30px'},
      mb:'10px',
      textAlign:'center',
      border:2,
      borderColor: 'primary.light',
      borderRadius:'30px',
      '& .MuiDataGrid-row:hover': {
        backgroundColor: "rgb(255, 255, 255)",
         cursor: 'pointer',
         transform: 'scale(1)',
         rowHeight:'100px',
         textAlign:'center',
         color:'black'
      },
      onrowClick: {
        backgroundColor: "rgb(255, 255, 255)",
        cursor: 'pointer',
         transform: 'scale(1)',
         color:'black'
      },
      '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
        outline: 'none'},
        [`& .${gridClasses.row}`]:{
          '&.Mui-selected':{
          backgroundColor:'black',
          color:'white'
        },
        '&.Mui-selected:hover':{
          backgroundColor:'black'
        }},
      
    }
  const columns = [
    {
      field: 'Onoff',
      headerName: 'Onoff',
     flex:1,
      editable: false,
      headerAlign:'center',
      align: 'center',
      
    },
    {
      field: 'Campaign',
      headerName: 'Campaign',
      flex:1,
      editable: false,
      headerAlign:'center',
      align: 'center',
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} 
          </div>
        );
      }
    },
    {
      field: 'DateRange',
      headerName: 'DateRange',
      flex:1,
      editable: false,
      headerAlign:'center',
      align: 'center',
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} </div> );
      }
      
    },
    {
      field: 'Clicks',
      headerName: 'Clicks',
      flex:1,
      editable: false,
      headerAlign:'center',
      align: 'center',
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} </div> );
      }
    },
    {
      field: 'Budget',
      headerName: 'Budget',
      flex:1,
      editable: false,
      headerAlign:'center',
      align: 'center',
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} </div> );
      }
    },  {
      field: 'Location',
      headerName: 'Location',
      flex:1,
      editable: false,
      headerAlign:'center',
      align: 'center',
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} </div> );
      }
    },
    {
      field: 'Platform',
      headerName: 'Platform',
      flex:1,
      editable: false,
      headerAlign:'center',
      align: 'center',
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} </div> );
      }
    },
    {
      field: 'Status',
      headerName: 'Status',
      flex:1,
      editable: false,
      headerAlign:'center',
      align: 'center',
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} </div> );
      }
    },
    {
      field: 'Actions',
      headerName:'Actions' ,
      flex:1,
      editable: false,
      headerAlign:'center',
      align: 'center',
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} </div> );
      }
    }
  ];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/newcampaigns");
  };
  
  return (
  <div>
      <div className='headbar'>
      <div className='titles'>
      <Typography variant='h4' sx={{color:'black',fontStyle:'bold',ml:'30px'}}>Your Campaigns</Typography>
      <Typography variant='subtitle1' sx={{color:'black',fontStyle:'bold',ml:'30px'}}> Check the list of campigns you created </Typography>
      </div>
      <Button onClick={handleClick} variant="contained" startIcon={<IoIosAddCircleOutline/>}  sx={{height:'40px'}}>Create new Campaign</Button>
      </div>
      <div style={{ height: 250, width: '100%' }}>
      <DataGrid
      disableColumnMenu  disableColumnSelector 
      sx={Datagridstyle}
         checkboxSelection
         disableexport
        disableSelectionOnClick
        columns={columns}
        rows={[
          { id: 1,Onoff:'shaan', Campaign: 'React' ,DateRange:'shaan',Clicks:'3000',Budget:'INR 3,400',Location:'chennai',Platform:'F',Status:'Live now',Actions:'edit'},
          { id: 2, Onoff:'shaan', Campaign: 'React' ,DateRange:'shaan',Clicks:'3000',Budget:'INR 3,400',Location:'chennai',Platform:'F',Status:'Live now',Actions:'edit'},
          { id: 3,Onoff:'shaan', Campaign: 'React' ,DateRange:'shaan',Clicks:'3000',Budget:'INR 3,400',Location:'chennai',Platform:'F',Status:'Live now',Actions:'edit'},
          { id: 4, Onoff:'shaan', Campaign: 'React' ,DateRange:'shaan',Clicks:'3000',Budget:'INR 3,400',Location:'chennai',Platform:'F',Status:'Live now',Actions:'edit'},
        
        ]}
        components={{
          Toolbar: QuickSearchToolbar,
        }}
      />
    </div>
      
     
  </div>
  )
}

export default Campaigns