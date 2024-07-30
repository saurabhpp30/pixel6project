import './App.css';

import { Allroutes } from './Routes/Allroutes';
import { useState ,useEffect} from 'react';


import {Header} from './Components/index'

function App() {
  const [upDate,setUpdate] = useState({})
  const [performTask,setTaskperform] = useState(JSON.parse(localStorage.getItem("customers"))||[])
  useEffect(()=>{
    localStorage.setItem("customers",JSON.stringify(performTask));
    
  },[performTask])
  return (
    <div className="App">
     <Header/>
     <Allroutes performTask={performTask} setTaskperform={setTaskperform} upDate = {upDate} setUpdate={setUpdate} />
    </div>
  );
}

export default App;
