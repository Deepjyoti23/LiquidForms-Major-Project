import React from 'react'

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

  return (
    <div className="container d-flex">
    <div className='row'>
      <div className='col'>
      <div className='d-flex align-items-center pt-4 mb-2'style={{color:'#F50057',fontFamily:"Roboto"}}>
        <img src="/undraw_control_panel_re_y3ar.png" height={100} alt="" />
        <h2 className='fw-bold'>Manage Your Forms</h2>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-4 g-4">
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
</div>
    <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img
        src="https://i.pinimg.com/564x/02/a2/0f/02a20f358623bc94240154c098501dfb.jpg"
        className="card-img-top"
        alt="Event"
      />
      <div className="card-body">
        <h5 className="card-title">Product order</h5>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img
        src="https://corp.ezetap.com/uploads/blogs/Blog-1052x621-1_(1).jpg"
        className="card-img-top"
        alt="Doctor"
      />
      <div className="card-body">
        <h5 className="card-title">Payment Form</h5>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img
        src="https://startquestion.staginglab.pro/wp-content/uploads/2022/01/flat-feedback-concept-with-devices_23-2148959887-1.jpg"
        className="card-img-top"
        alt="School"
      />
      <div className="card-body">
        <h5 className="card-title">Feedback Form </h5>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img
        src="data:image/jpeg;base64,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"
        className="card-img-top"
        alt="Restaurant"
      />
      <div className="card-body">
        <h5 className="card-title">Job Application</h5>
        
      </div>
    </div>
  </div>
</div>

  </div>
  
  </div>

  )
}

export default ManageForm;