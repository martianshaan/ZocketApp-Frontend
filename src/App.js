import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Dashboard/SideNavBar/Home/Home';
import Campaigns from './Dashboard/SideNavBar/Campaigns/Campaigns';
import NewCampaign from './Dashboard/SideNavBar/Campaigns/NewCampaign/NewCampaign'




function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/*" element={<Dashboard/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="campaigns" element={<Campaigns/>}/>
      <Route path="newcampaigns" element={<NewCampaign/>}/>  
      </Route>
      </Routes>
      
      </BrowserRouter>
  );
}

export default App;
