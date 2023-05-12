import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const ManageForm = () => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [formList, setFormList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getDataFromBackend = async () => {
    setLoading(true);
    const response = await fetch(
      "http://localhost:5000/form/getbyuser/" + currentUser._id
    );

    const data = await response.json();
    console.log("Listforms ****" + data);
    setFormList(data);
    setLoading(false);
  };

  const deleteForm = async (id) => {
    console.log("id user" + id);
    const response = await fetch("http://localhost:5000/form/delete/" + id, {
      method: "DELETE",
    });
    console.log(response.status);
    getDataFromBackend();
    toast.success("Form Deleted 😎");
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const createNewForm = async () => {
    const formdata = {
      title: "Untitled Form",
      heading: "",
      description: "",
      data: {
        questions: [
          {
            name: "",
            answer: "",
            type: "",
            options: [{ label: "Untitled Option", checked: false }],
            correct: "",
            mark: 0,
          },
        ],
        confirmationMsg: "",
        isQuiz: false,
        limitResponses: false,
        dbType: "",
        dbSrc: null,
        styles: {},
      },
      user: currentUser._id,
      createdAt: new Date(),
      lastUpdate: new Date(),
    };

    console.log(formdata);
    const response = await fetch("http://localhost:5000/form/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    // console.log(data);
    navigate("/user/editform/" + data._id);
  };

  const displayForms = () => {
    if (!loading && formList)
      return formList.map((form) => (
        <div className="col-sm-4 col-md-3 mb-3">
          <div
            className="card h-100 theme-accent-back"
            
          >
            <div className="card-body">
              <div className="d-flex align-items-center">
                <img src="add-btn-image.png" className="d-block me-2" style={{height: 40}} alt="" />
              <p className="h2">{form.title}</p>
              </div>
              <p
                className="card-text mt-2"
                // style={{ height: 50 }}
                data-mdb-toggle="tooltip"
                title={form.description}
              >
                {form.description ? (
                  form.description.substring(0, 80) + "..."
                ) : (
                  'No Description'
                )}
              </p>
              
            </div>
            <div className="card-footer">
            <Link
                to={"/user/editform/" + form._id}
                className="btn btn-primary m-2"
              >
                <i class="fas fa-pen-alt "></i>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteForm(form._id);
                }}
              >
                <i className="fas fa-trash" />
              </button>
            </div>
          </div>
        </div>
      ));
    else return <h1>Loading...</h1>;
  };

  return (
    <div className="container d-flex">
    <div className='row'>
      <div className='col'>
      <div className='d-flex align-items-center pt-4 mb-2'style={{color:'#F50057',fontFamily:"Roboto"}}>
        <img src="/undraw_control_panel_re_y3ar.png" height={100} alt="" />
        <h2 className='fw-bold'>Manage Your Forms</h2>
        {/* <button className='btn btn-lg btn-primary' onClick={createNewForm}>
            Create new form
        </button> */}
        <button type="button" className="btn btn-lg fw-bold " style={{backgroundColor:"greenyellow"}} onClick={createNewForm} >
            <img className='pe-1' src="https://i.pinimg.com/564x/9d/08/cc/9d08cc2022b1d219c5cc54ac8d8ebe31.jpg"height={30} width={35} alt="" style={{borderRadius:"100px"}}/>
          {/* <i className="fas fa-plus-square  p-2  "></i> */}
            Create New Form
          </button>
      </div>
    </div>
    {displayForms()}
    {/* <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img
        src="https://i.pinimg.com/564x/02/a2/0f/02a20f358623bc94240154c098501dfb.jpg"
        className="card-img-top"
        alt="Event"
      />
      <div className="card-body">
        <h5 className="card-title">Event Registration</h5>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img
        src="https://thumbs.dreamstime.com/b/doctor-patient-measuring-blood-pressure-healthcare-hospital-medicine-concept-34107745.jpg"
        className="card-img-top"
        alt="Doctor"
      />
      <div className="card-body">
        <h5 className="card-title">Doctor Appointment</h5>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img
        src="https://i.pinimg.com/564x/8e/24/95/8e249585562b7f72c8b89f28b8cd9fa7.jpg"
        className="card-img-top"
        alt="School"
      />
      <div className="card-body">
        <h5 className="card-title">School Admission </h5>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img
        src="https://i.pinimg.com/564x/3b/59/a0/3b59a067398ef0702975e2504ec7cc18.jpg"
        className="card-img-top"
        alt="Restaurant"
      />
      <div className="card-body">
        <h5 className="card-title">Restaurant Reservation</h5>
        
      </div>
    </div>
  </div>
</div> */}

  </div>
  
  </div>

  )
}

export default ManageForm;