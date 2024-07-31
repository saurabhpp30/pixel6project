import './App.css';

import { Allroutes } from './Routes/Allroutes';
import { useState } from 'react';


import {Header} from './Components/index'

function App() {
  const [upDate,setUpdate] = useState({})
  
  return (
    <div className="App">
     <Header/>
     <Allroutes upDate = {upDate} setUpdate={setUpdate} />
    </div>
  );
}

export default App;
