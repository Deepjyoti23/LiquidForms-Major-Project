import React from 'react'

const ManageForm = () => {
  return (
    <div className="container">
    <div>

    <div>
      <div className='d-flex align-items-center'>
        <h1>Manage Your Form</h1>
      </div>
      <div className='d-flex justify-content-end align-items-center '>
        <div className='btn btn-lg border'>
          <i class="fas fa-plus-square  p-2  "></i>
          Create new form
        </div>
      </div>
      <hr />
    </div>
    <div className="row border ">
      <div className="col-md border">One of three columns</div>
      <div className="col-md border">One of three columns</div>
      <div className="col-md border">One of three columns</div>
      <div className="col-md border">One of three columns</div>
      <div className="col-md border">One of three columns</div>
    </div>
  </div>
  
  </div>

  )
}

export default ManageForm;