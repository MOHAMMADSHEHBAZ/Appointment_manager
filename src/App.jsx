import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import List from './Components/List'
function App() {

  const [appointments, setAppointments] = useState([]);

    const addAppointment = (appointment) => {
        setAppointments([...appointments, appointment]);
    };

    const deleteAppointment = (index) => {
      const deletedAppointments = [...appointments];
      deletedAppointments.splice(index, 1);
      setAppointments(deletedAppointments);
  };

  const editAppointment = (index, editedName, editedLname, editedMobile , editedDate , editedTime) => {
      const updatedAppointments = [...appointments];
      updatedAppointments[index] = {
          name: editedName,
          lname: editedLname,
          mobile: editedMobile,
          date: editedDate,
          time: editedTime,
      };
      setAppointments(updatedAppointments);
  };

  const clearAppointments = () => {
      setAppointments([]);
  };

  return (
    <>
      <div className='min-h-screen flex items-center flex-col background'>
      <header className='p-5'>
        <h1 className='text-4xl font-serif font-semibold text-blue-950'>
        Appointment Manager
        </h1>
      </header>
      {/* <div>
      <form>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 border'>
        <div className='min-w-96 '>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-blue-950 ">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " placeholder="John" required />
        </div>
        <div className='min-w-96 '>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-blue-950 ">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " placeholder="John" required />
        </div>
      </div>
      </form>
      </div> */}
      
      <Form addAppointment={addAppointment}/>
      <List
      appointments={appointments}
      deleteAppointment={deleteAppointment}
      clearAppointments={clearAppointments}
      editAppointment={editAppointment}
      />

      </div>
    </>
  )
}

export default App
