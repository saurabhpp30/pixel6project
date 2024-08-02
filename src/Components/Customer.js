import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Addtolist, UpdateList } from '../store/createActions'

export function Customer({ upDate, setUpdate }) {
  const [pan, setpan] = useState("")
  const [name, setname] = useState("")
  const [errpan, seterrpan] = useState(false)
  const [add1, setadd1] = useState("")
  const [add2, setadd2] = useState("")
  const UpPan = async (e) => {
    const panno = e.target.value
    let objpan = {
      panNumber: `${panno}`
    }
    if (panno.length === 10) {
      try {
        const response = await axios.post('https://lab.pixel6.co/api/verify-pan.php', objpan);
        if (response.data.isValid) {
          seterrpan(false)
          setUpdate({ ...upDate, name: response.data.fullName, pan: panno })
        } else {

          seterrpan(true)
        }

      } catch (error) {
        console.error("Error verifying PAN:", error);
      }

    } else {
      setname("")
      seterrpan(true)
      setUpdate({ ...upDate, name: "", pan: panno })
    }
  }
  const HandlePan = async (e) => {
    const panno = e.target.value
    setpan(panno)
    let objpan = {
      panNumber: `${panno}`
    }
    if (panno.length === 10) {
      try {
        const response = await axios.post('https://lab.pixel6.co/api/verify-pan.php', objpan);
        if (response.data.isValid) {
          seterrpan(false)
          setname(response.data.fullName)
        } else {

          seterrpan(true)
        }

      } catch (error) {
        console.error("Error verifying PAN:", error);
      }

    } else {
      setname("")
      seterrpan(true)
    }
  }
  const [mail, setmail] = useState("")
  const [erremail, seterremail] = useState(false)
  const Handlemail = (e) => {
    if (upDate.sucess) {
      const mail = e.target.value
      setUpdate({ ...upDate, email: mail })
      const mailexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (mailexp.test(mail)) {
        seterremail(false)
      } else {
        seterremail(true)
      }

    }
    else {
      const mail = e.target.value
      setmail(mail)
      const mailexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      console.log("gorilla")
      if (mailexp.test(mail)) {
        seterremail(false)
      } else {
        seterremail(true)
      }
    }
  }
  const [mob, setmob] = useState("")
  const [errmob, seterrmob] = useState(false)
  const HandleMob = (e) => {
    if (upDate.sucess) {
      const mobile = e.target.value
      const mobileexp = /^\d{10}$/
      setUpdate({ ...upDate, Monum: mobile })
      if (mobileexp.test(mobile)) {
        seterrmob(false)
      } else {
        seterrmob(true)
      }
    }
    else {
      const mobile = e.target.value
      const mobileexp = /^\d{10}$/;
      setmob(mobile)
      if (mobileexp.test(mobile)) {
        seterrmob(false)
      } else {
        seterrmob(true)
      }
    }
  }
  const [pin, setpin] = useState("")
  const [errpin, seterrpin] = useState(false)
  const [city, setcity] = useState("")
  const [state, setstate] = useState("")
  const Handlepin = async (e) => {
    let pincode = e.target.value
    seterrcode(false)
    setpin(pincode)
    let objpin = {
      postcode: 411005
    }
    console.log(pincode)
    if (pincode.length === 6) {
      seterrpin(false)
      try {
        const response = await axios.post('https://lab.pixel6.co/api/get-postcode-details.php', objpin);
        if (response.data.status === "Success") {
          setcity(response.data.city[0].name);
          setstate(response.data.state[0].name);
        } else {
          seterrpin(false)
        }

      } catch (error) {
        console.error("Error verifying PIN:", error);
      }

    } else {
      setcity("")
      setstate("")
      seterrpin(true)
    }

  }
  const [update, setupdate] = useState({})
  const [add, setadd] = useState([])
  const [id, setid] = useState(1)
  const [adderr, setadderr] = useState(false)
  const [erradd1, seterradd1] = useState(false)
  const [errcode, seterrcode] = useState(false)
  const Addaddress = (e) => {
    if (update.id) {
      setuperr(false)
      if (upDate.sucess) {
        if (upDate.add.add1 !== '' && upDate.pin !== '') {
          const editTask = upDate.add.map((todo) => (
            todo.id === update.id ? { id: update.id, add1: add1, add2: add2, pin: pin, city: city, state: state } : todo
          ))
          setUpdate({ ...upDate, add: editTask })
          setadd(editTask)
          setupdate({})
          setcity("")
          setstate("")
          setadd([])
          setpin("")
          setadd1("")
          setadd2("")
        }
        else {
          if (add1) {
            seterrcode(true)
            seterradd1(false)
          } else {
            seterradd1(true)
          }
        }
      } else {
        if (update.add !== '' && update.pin !== '') {
          const editTask = add.map((todo) => (
            todo.id === update.id ? { id: update.id, add1: add1, add2: add2, pin: pin, city: city, state: state } : todo
          ))
          setadd(editTask)
          setupdate({})
          setcity("")
          setstate("")
          setpin("")
          setadd1("")
          setadd2("")
        }
        else {
          if (add1) {
            seterrcode(true)
            seterradd1(false)
          } else {
            seterradd1(true)
          }
        }
      }
    }
    else {
      if (upDate.sucess) {
        if (add1 !== '' && pin !== '') {
          setader(false)
          setid(upDate.add.length + 1)
          if (upDate.add.length < 10) {
            setUpdate({
              ...upDate, add: [...upDate.add,
              {
                id: id,
                add1: `${add1}`,
                add2: add2,
                city: city,
                state: state,
                pin: pin
              }
              ]
            })
            setcity("")
            setstate("")
            setpin("")
            setadd1("")
            setadd2("")
          } else {
            setadderr(true)
          }
        } else {
          if (add1) {
            seterrcode(true)
            seterradd1(false)
          } else {
            seterradd1(true)
          }
        }

      } else {
        if (add1 !== '' && pin !== '') {
          setid(id + 1)
          setader(false)
          if (add.length < 10) {
            setadd([...add,
            {
              id: id,
              add1: `${add1}`,
              add2: add2,
              city: city,
              state: state,
              pin: pin
            }
            ])
            setcity("")
            setstate("")
            setpin("")
            setadd1("")
            setadd2("")
          } else {
            setadderr(true)
          }
        } else {
          if (add1) {
            seterrcode(true)
            seterradd1(false)
          } else {
            seterradd1(true)
          }
        }
      }
    }

  }
  const Handledit = (id) => {
    if (upDate.sucess) {
      const Updateadd = upDate.add.find(evalu => evalu.id === id)
      setadd1(Updateadd.add1)
      setadd2(Updateadd.add2)
      setcity(Updateadd.city)
      setstate(Updateadd.state)
      setpin(Updateadd.pin)
      setupdate(Updateadd)
    } else {
      const Updateadd = add.find(evalu => evalu.id === id)
      setadd1(Updateadd.add1)
      setadd2(Updateadd.add2)
      setcity(Updateadd.city)
      setstate(Updateadd.state)
      setpin(Updateadd.pin)
      setupdate(Updateadd)
    }
  }
  const Handledelete = (id) => {
    if (upDate.sucess) {
      setUpdate({ ...upDate, add: upDate.add.filter((value) => (id !== value.id)) })
    } else {
      const newadd = add.filter((field) => (id !== field.id))
      setadd([...newadd])
    }
  }
  const dispatch = useDispatch()
  const [uperr, setuperr] = useState(false)
  const [ader, setader] = useState(false)
  const [cre, setcre] = useState("")
  const clearcre = () => {
    setcre("");
  };
  useEffect(() => {
    const handleMouseMove = () => {
      clearcre();
    };
    if (cre) {
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [cre]);
  const Mainsubmit = (e) => {
    e.preventDefault()
    if (update.id) {
      setuperr(true)
    } else {
      setuperr(false)
      if (upDate.sucess) {
        if (upDate.add.length === 0 || upDate.Monum.length !== 10) {
          if (upDate.add.length === 0) {

            setader(true)
          } else {

            setader(false)
          }
        } else {
          setader(false)
          const custarr = { ...upDate }
          setcre("customer updated sucessfully")
          dispatch(UpdateList(custarr))
          setUpdate({})
          setadd1("")
          setadd2("")
          setpin("")
          setcity("")
          setstate("")
          console.log()
          seterrmob(false)
          setadderr(false)
        }
      }
      else {
        if (add.length === 0 || mob.length !== 10) {
          if (add.length === 0) {
            setader(true)
          }

        } else {
          setader(false)
          const id = Math.floor(1000 * Math.random())
          const custarr = {
            id: id,
            pan: pan,
            name: name,
            Monum: mob,
            email: mail,
            add: add,
          }
          console.log("hello saurabh")
          dispatch(Addtolist(custarr))
          setcre("customer created sucessfully")
          setmail("")
          setpan("")
          setmob("")
          setname("")
          setadd1("")
          setadd2("")
          setpin("")
          setcity("")
          setstate("")
          setadd([])
          seterrmob(false)
          setadderr(false)
        }
      }
    }

  }
  return (
    <section className="flex flex-col items-center pt-6">
      <div className="w-full bg-white rounded-lg shadow-md sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            {upDate.sucess ? 'Update Customer' : 'Create Customer'}
          </h1>
          <form onSubmit={Mainsubmit} className="space-y-4">
            <div>
              <label htmlFor="pan" className="block text-gray-700">Pan No</label>
              <input
                type="text"
                name="pan"
                id="pan"
                value={upDate.sucess ? upDate.pan : pan}
                onChange={upDate.sucess ? UpPan : HandlePan}
                maxLength={10}
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-gray-900 sm:text-sm focus:ring-blue-600 focus:border-blue-600"
              />
              {errpan && <p className="text-red-500 text-xs italic">Please enter a valid PAN</p>}
            </div>
            <div>
              <label htmlFor="name" className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={upDate.sucess ? upDate.name : name}
                maxLength={140}
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-gray-900 sm:text-sm focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
              <div className="flex items-center border border-gray-300 rounded-md bg-gray-50">
                <span className="px-3 py-2 bg-gray-200 text-gray-700">+91</span>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={upDate.sucess ? upDate.Monum : mob}
                  onChange={HandleMob}
                  maxLength={10}
                  required
                  className="w-full bg-transparent border-none rounded-r-md p-2.5 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
              {errmob && <p className="text-red-500 text-xs italic">Please enter a valid Mobile Number</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={upDate.sucess ? upDate.email : mail}
                onChange={Handlemail}
                maxLength={255}
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-gray-900 sm:text-sm focus:ring-blue-600 focus:border-blue-600"
              />
              {erremail && <p className="text-red-500 text-xs italic">Please enter a valid email</p>}
            </div>
            <div>
              <label htmlFor="address1" className="block text-gray-700">Address Line 1</label>
              <input
                type="text"
                name="address1"
                id="address1"
                value={add1}
                onChange={(e) => { setadd1(e.target.value); seterradd1(false); }}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-gray-900 sm:text-sm focus:ring-blue-600 focus:border-blue-600"
              />
              {erradd1 && <p className="text-red-500 text-xs italic">Address line 1 cannot be empty</p>}
            </div>
            <div>
              <label htmlFor="address2" className="block text-gray-700">Address Line 2</label>
              <input
                type="text"
                name="address2"
                id="address2"
                value={add2}
                onChange={(e) => setadd2(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-gray-900 sm:text-sm focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
            <div>
              <label htmlFor="pin" className="block text-gray-700">Zip/Postal Code</label>
              <input
                type="text"
                name="pin"
                id="pin"
                value={pin}
                onChange={Handlepin}
                maxLength={6}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-gray-900 sm:text-sm focus:ring-blue-600 focus:border-blue-600"
              />
              {errpin && <p className="text-red-500 text-xs italic">Please enter a valid PIN</p>}
              {errcode && <p className="text-red-500 text-xs italic">Postal code cannot be empty</p>}
            </div>
            <div>
              <label htmlFor="city" className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={city}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-gray-900 sm:text-sm focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-gray-700">State/Province</label>
              <input
                type="text"
                name="state"
                id="state"
                value={state}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-gray-900 sm:text-sm focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
            <button
              type="button"
              onClick={Addaddress}
              className="w-auto bg-gray-900 text-white rounded-lg py-1 px-3 text-xs font-bold uppercase shadow-md transition hover:shadow-lg"
            >
              {update.id ? "UPDATE" : "ADD"}
            </button>
            {adderr && <p className="text-red-500 text-xs italic">Cannot add more than 10 addresses</p>}
            {uperr && <p className="text-red-500 text-xs italic">Update address first</p>}
            <div className="mt-6">
              <h2 className="text-lg font-bold">Addresses</h2>
              {ader && <p className="text-red-500 text-xs italic">Address field cannot be empty</p>}
              <ul>
                {(upDate.sucess ? upDate.add : add).map((addr) => (
                  <li key={addr.id} className="mb-4">
                    <p><strong>Address Line 1:</strong> {addr.add1}</p>
                    <p><strong>Address Line 2:</strong> {addr.add2}</p>
                    <p><strong>Pin:</strong> {addr.pin}</p>
                    <p><strong>City:</strong> {addr.city}</p>
                    <p><strong>State:</strong> {addr.state}</p>
                    <div className="flex space-x-2 mt-2">
                      <button
                        type="button"
                        onClick={() => Handledit(addr.id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => Handledelete(addr.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 text-sm font-medium shadow-md transition hover:bg-blue-700"
            >
              {upDate.sucess ? "Update Customer" : "Create  Customer"}
            </button>
            {cre && (
              <p className="text-green-500 text-xs italic">
                {cre}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}