import {Routes,Route} from "react-router-dom"
import { Custlist, } from "../pages"
import { Customer } from "../Components/Customer"

export const Allroutes = ({upDate,setUpdate,performTask,setTaskperform}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element ={<Customer performTask={performTask} setTaskperform={setTaskperform}  upDate={upDate} setUpdate={setUpdate}/>}/>
        <Route path = "/custlist" element = {<Custlist performTask={performTask} setTaskperform={setTaskperform}  upDate={upDate} setUpdate={setUpdate}/>}/>
      </Routes>
    </div>
  )
}