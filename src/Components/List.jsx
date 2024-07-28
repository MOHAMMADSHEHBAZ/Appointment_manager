import React, { useState } from 'react';

const List = ({ appointments, deleteAppointment, editAppointment }) => {
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedFname, setEditedFname] = useState("");
  const [editedLname, setEditedLname] = useState("");
  const [editedMobile, setEditedMobile] = useState("");
  const [editedDate, setEditedDate] = useState("");
  const [editedTime, setEditedTime] = useState("");

  const handleEdit = (index) => {
    setEditedIndex(index);
    setEditedFname(appointments[index].name);
    setEditedLname(appointments[index].lname);
    setEditedMobile(appointments[index].mobile);
    setEditedDate(appointments[index].date);
    setEditedTime(appointments[index].time);
  };

  const handleSaveEdit = (index) => {
    editAppointment(index, editedFname, editedLname, editedMobile, editedDate, editedTime);
    setEditedIndex(null);
    setEditedFname("");
    setEditedLname("");
    setEditedMobile("");
    setEditedDate("");
    setEditedTime("");
  };

  const handleCancelEdit = () => {
    setEditedIndex(null);
    setEditedFname("");
    setEditedLname("");
    setEditedMobile("");
    setEditedDate("");
    setEditedTime("");
  };

  return (
    <div className='flex items-center justify-center flex-col w-screen mt-5'>
      <header>
        <h1 className='text-blue-950 text-2xl  rounded-xl p-2'>Appointment List</h1>
      </header>
      {/* <table id="list">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {editedIndex === index ? (
                  <input
                    type="text"
                    value={editedFname}
                    onChange={(e) => setEditedFname(e.target.value)}
                  />
                ) : (
                  appointment.fname
                )}
              </td>
              <td>
                {editedIndex === index ? (
                  <input
                    type="text"
                    value={editedLname}
                    onChange={(e) => setEditedLname(e.target.value)}
                  />
                ) : (
                  appointment.lname
                )}
              </td>
              <td>
                {editedIndex === index ? (
                  <input
                    type="text"
                    value={editedMobile}
                    onChange={(e) => setEditedMobile(e.target.value)}
                  />
                ) : (
                  appointment.mobile
                )}
              </td>
              <td>
                {editedIndex === index ? (
                  <input
                    type="date"
                    value={editedDate}
                    onChange={(e) => setEditedDate(e.target.value)}
                  />
                ) : (
                  appointment.date
                )}
              </td>
              <td>
                {editedIndex === index ? (
                  <input
                    type="time"
                    value={editedTime}
                    onChange={(e) => setEditedTime(e.target.value)}
                  />
                ) : (
                  appointment.time
                )}
              </td>
              <td>
                {editedIndex === index ? (
                  <>
                    <button onClick={() => handleSaveEdit(index)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => deleteAppointment(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    First Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Last Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Mobile
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Time
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
              <td class="px-6 py-4">
                {editedIndex === index ? (
                  <input
                    type="text"
                    value={editedFname}
                    onChange={(e) => setEditedFname(e.target.value)}
                  />
                ) : (
                  appointment.name
                )}
              </td>
              <td class="px-6 py-4">
                {editedIndex === index ? (
                  <input
                    type="text"
                    value={editedLname}
                    onChange={(e) => setEditedLname(e.target.value)}
                  />
                ) : (
                  appointment.lname
                )}
              </td>
              <td class="px-6 py-4">
                {editedIndex === index ? (
                  <input
                    type="number"
                    value={editedMobile}
                    onChange={(e) => setEditedMobile(e.target.value)}
                  />
                ) : (
                  appointment.mobile
                )}
              </td>
              <td class="px-6 py-4">
                {editedIndex === index ? (
                  <input
                    type="date"
                    value={editedDate}
                    onChange={(e) => setEditedDate(e.target.value)}
                  />
                ) : (
                  appointment.date
                )}
              </td>
              <td class="px-6 py-4">
                {editedIndex === index ? (
                  <input
                    type="time"
                    value={editedTime}
                    onChange={(e) => setEditedTime(e.target.value)}
                  />
                ) : (
                  appointment.time
                )}
              </td>
              <td class="px-6 py-4">
                {editedIndex === index ? (
                  <>
                    <button onClick={() => handleSaveEdit(index)} className='p-1 text-green-500'>Save</button>
                    <button onClick={handleCancelEdit} className='p-1 text-red-600'>Cancel</button>
                  </>
                ) : (
                  <>
                    <button title='edit' onClick={() => handleEdit(index)}><svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd"/>
</svg>
</button>
                    <button title='delete' onClick={() => deleteAppointment(index)}><svg class="w-6 h-6 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>
</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
    </table>
</div>

    </div>
  );
};

export default List;
