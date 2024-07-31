import { Routes, Route } from "react-router-dom"
import { Custlist, } from "../pages"
import { Customer } from "../Components/Customer"

export const Allroutes = ({ upDate, setUpdate }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Customer upDate={upDate} setUpdate={setUpdate} />} />
        <Route path="/custlist" element={<Custlist upDate={upDate} setUpdate={setUpdate} />} />
      </Routes>
    </div>
  )
}