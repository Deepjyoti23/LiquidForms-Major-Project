import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'

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
          <div className="card border m-2 h-100 theme-accent-back"style={{border:"50%"}}>
            <div className='card-header border nav-log-bg'>

              <div className="d-flex align-items-center">
                <img src="add-btn-image.png" className="d-block me-2" style={{height: 40}} alt="" />
              <p className="h3" style={{color:"rgb(3 4 110)"}}>{form.title}</p>
              </div>
            </div>
              {/* <div className='border w-100 p-0'></div> */}
            <div className="card-body " style={{border:"2px"}}>
              <p
                className="card-text m-2"
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
            <div className="card-footer border bg-dark">
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
    <div style={{backgroundColor:"#f0fbff"}}>

    <div className="container" >
    <div className='row '>
      <div className='col'>
      <div className='d-flex align-items-center pt-4 mb-2'style={{color:'#F50057',fontFamily:"Roboto"}}>
        <img src="/undraw_control_panel_re_y3ar.png" height={100} alt="manageform" />
        <h2 className='fw-bold'>Manage Forms</h2>
        {/* <button className='btn btn-lg btn-primary' onClick={createNewForm}>
            Create new form
        </button> */}
      </div>
    </div>
      <div className='col'>
        <div className='d-flex pt-5 justify-content-end align-items-center'>

        <button type="button" className="btn btn-lg fw-bold  btn-primary" style={{backgroundColor:"rgb(2 2 88)"}} onClick={createNewForm} >
            {/* <img className='pe-1' src="https://i.pinimg.com/564x/9d/08/cc/9d08cc2022b1d219c5cc54ac8d8ebe31.jpg"height={30} width={35} alt="" style={{borderRadius:"100px"}}/> */}
            <i class="fas fa-plus-circle pe-2 "></i>
          {/* <i className="fas fa-plus-square  p-2  "></i> */}
            Create New Form
          </button>
        </div>
      </div>
    <div className='row pt-5'>
      <div className='col d-flex'>
        {displayForms()}
          
      </div>

    </div>
    

  </div>
  
  </div>
    </div>

  )
}

export default ManageForm;