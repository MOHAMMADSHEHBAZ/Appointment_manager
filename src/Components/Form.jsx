import React from 'react'
import { useState } from 'react';

const Form = ({ addAppointment }) => {

    const [name, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [mobile, setMobile] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointment({ name, lname , mobile , date ,time});
        setFname("");
        setLname("");
        setMobile("");
        setDate("");
        setTime("");
    };

  return (
    <>
    <form className="flex items-center justify-center flex-col w-screen" onSubmit={handleSubmit}>

<div className="grid md:grid-cols-3 md:gap-2">
  <div className="width relative z-0 max-w-64 mb-5 group">
      <input type="text" name="floating_first_name" id="floating_first_name" value={name} onChange={(e) => setFname(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " required />
      <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
  </div>
  <div className="width relative z-0 max-w-64 mb-5 group">
      <input type="text" name="floating_last_name" id="floating_last_name" value={lname} onChange={(e) => setLname(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " />
      <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
  </div>
  <div className="width relative z-0 max-w-64 mb-5 group">
      <input type="text" name="floating_mobile" id="floating_mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " required />
      <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile</label>
  </div>
</div>
<div className="grid md:grid-cols-2 md:gap-2 mb-5">
  <div className='width1'>    
  <label htmlFor="time" className="block mb-2 text-sm font-medium text-blue-950">Select Date:</label>
  <div>
      <input
      id="Date"
      name="Date"
      placeholder="Date"
      type="Date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className='outline-none bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-950 focus:border-blue-950 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      required
      />
  </div>
  </div>
  <div className='width1'>
  <label htmlFor="time" className="block mb-2 text-sm font-medium text-blue-950 ">Select time:</label>
  <div>
      <input
      id="Time"
      name="Time"
      placeholder="Time"
      type="time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      className='outline-none bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-950 focus:border-blue-950 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-950 dark:focus:border-blue-950'
      required
      />
  </div>
  </div>    
</div>
<input type="submit" value="Add Appointment"  className=" text-white bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
</form>
    </>
  )
}

export default Form
