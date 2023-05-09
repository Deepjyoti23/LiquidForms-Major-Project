import React from 'react'

const ManageForm = () => {
  return (
    <div className="container">
    <div className='row'>
      <div className='col '>
      <div className='d-flex align-items-center'>
        <h1>Manage Your Form</h1>
      </div>
      <div className='d-flex justify-content-end align-items-center pt-0 '>
        <div className='btn btn-lg border'>
          <i class="fas fa-plus-square  p-2  "></i>
          Create new form
        </div>
      </div>
      <hr />
    </div>
    <div className="row ">
      <div className="col-md m-2">
        <div className='card'>
          <div className='card-body p-0'>
            <div className='row'>
            <img className='card-img-top p-0' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />

            </div>
            <div className='row border'>
            <h4>
              Event Registration</h4>

            </div>

          </div>
        </div>
      </div>
      <div className="col-md border m-2">
      <div className='card'>
      <div className='card-body p-0'>
            <div className='row'>
            <img className='card-img-top p-0' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />

            </div>
            <div className='row border'>
            <h4>
              Doctor Appoinment Form</h4>

            </div>

          </div>
        </div></div>
      <div className="col-md m-4">
      <div className='card'>
      <div className='card-body p-0'>
            <div className='row'>
            <img className='card-img-top p-0' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />

            </div>
            <div className='row border'>
            <h4>
              School Admission Form</h4>

            </div>

          </div>
        </div></div>
      <div className="col-md m-2">
      <div className='card'>
      <div className='card-body p-0'>
            <div className='row'>
            <img className='card-img-top p-0' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />

            </div>
            <div className='row border'>
            <h4>
              Restaurant Registration</h4>

            </div>

          </div>
        </div>
      </div>
     
      {/* <div className="col-md border">One of three columns</div> */}
    </div>
  </div>
  
  </div>

  )
}

export default ManageForm;