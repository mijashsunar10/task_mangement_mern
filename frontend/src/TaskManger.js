import React from 'react'
import {FaCheck, FaPencilAlt, FaPlus, FaSearch, FaTrash} from 'react-icons/fa';

import {Toas, ToastContainer} from 'react-toastify';
function TaskManger() {
  return (

        <div className='d-flex flex-column align-items-center w-50 m-auto mt-5'>
          <h1 className='mb-4' >
            TaskManger App
          </h1>

          {/* INput and Search box */}
         <div className='d-flex justify-content-between align-items-center mb-4 w-100'>
           <div className='input-group flex-grow-1 me-1' >
            <input type='text' className='form-control me-1' placeholder='Add new task'/>
            <button className='btn btn-success btn-sm me-2'> <FaPlus className='m-2' /> </button>
          </div>

          <div className='input-group flex-grow-1 '>
            <span  className='input-group-text' >

              <FaSearch/>
              
            </span>
            <input className='form-control' type='text' placeholder='Search tasks' />
          </div>
         </div>

          {/* Task List */}
         <div className='d-flex flex-column w-100' >

          <div className='m-2 p-2 border bg-light w-100 rounded-3 d-flex justify-content-between align-items-center'>
            <span className='text-decoration-line-through' >Sample Task 1</span>

            <div className=''>
              <button type='button' className='btn btn-success btn-sm me-2'>

                <FaCheck/>

              </button>

              <button type='button' className='btn btn-primary btn-sm me-2'>

                <FaPencilAlt/>

              </button>

              <button type='button' className='btn btn-danger btn-sm me-2'>

                <FaTrash/>

              </button>
            </div>
          </div>



         </div>

          {/* Toastify */}

          <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false}/>
       

        </div>
      

  )
}

export default TaskManger
