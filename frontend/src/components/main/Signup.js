import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup'

const Signup = () => {

  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
    .min(2,'Too Short!')
    .max(10,'Too Long!')
    .required('Required'),

    email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  });

  const SignupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cPassword: ''
    },

    onSubmit: async(values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/add',{
        method : 'POST',
        body : JSON.stringify(values),
        headers : {
          'Content-Type' : 'application/json'
        }
      });
      console.log(res.status);
      console.log(await res.json());

      console.log('Form Submitted');

      if(res.status === 200){
        Swal.fire({
          icon : 'Success',
          title : 'Nice',
          text : 'User Registered Successfully'

        });
        navigate('/main/login');
      }
      else{
        Swal.fire({
          icon : 'Error',
          title : 'Oops...',
          text : 'Something went wrong!'
        });
      }
    },
    validationSchema : SignupSchema
  });
  return (
  <section className="vh-90"style={{backgroundColor:"#f0fbff"}} >
  <div className="container py-3 h-90">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black " style={{ borderRadius: 25, backgroundColor:"#f7f3f7" }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 ">
                <p className="text-center h1 fw-bold mx-1 mx-md-4 mt-">
                  Sign up
                </p>
                <div className='mb-5 d-flex justify-content-center'>

                <a href="#!" className="small text-muted">
                    Already have an account.
                  </a>
                  <a href="/main/login" className="small text-primary fw-bold ">
                    Login
                  </a>
                </div>
                <form className="mx-1 mx-md-4 " onSubmit={SignupForm.handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
              
                    <div className=" flex-fill mb-0">
                      <input
                        type="text"
                        id="name"
                        className={"form-control " +(SignupForm.errors.name ? "border-danger" : '')}
                        value={SignupForm.values.name}
                        onChange={SignupForm.handleChange}
                        placeholder='Name'
                      />
                      <span style={{color:'red',fontSize:'10'}}>{SignupForm.errors.name}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className=" flex-fill mb-0">
                      <input
                        type="email"
                        id="email"
                        value={SignupForm.values.email}
                        onChange={SignupForm.handleChange}
                        className="form-control"
                        placeholder='Email'
                      />
                      <span style={{color:'red',fontSize:'10'}}>{SignupForm.errors.email}</span>

                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className=" flex-fill mb-0">
                      <input
                        type="password"
                        id="password"
                        value={SignupForm.values.password}
                        onChange={SignupForm.handleChange}
                        className="form-control"
                        placeholder='Password'
                      />
                      <span style={{color:'red',fontSize:'10'}}>{SignupForm.errors.password}</span>
            
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className=" flex-fill mb-0">
                      <input
                        type="password"
                        id="cPassword"
                        value={SignupForm.values.cPassword}
                        onChange={SignupForm.handleChange}
                        className="form-control"
                        placeholder='Confirm Password'
                      />
                      <span style={{color:'red',fontSize:'10'}}>{SignupForm.errors.cPassword}</span>

                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mb-2 mb-lg-4 d-grid ">
                    <button type="submit" className="btn text-white btn-lg" style={{backgroundColor:"rgb(2 2 88)"}}>
                      Sign Up
                    </button>
                  </div>
                  <div className='d-flex align-items-center  mx-1  ps-5 my-3'>
                  <span className='border  w-50'></span>
                  <span className="text-center px-2 text-black text-nowrap fw-bold"> or</span>
                  <span className='border w-50'></span>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <span className='ps-4 pe-2'><img src="https://appletio-js.500apps.com/img/SSO/google-icon.png" alt="" /></span>
                  <span className='pe-3'><img src="	https://appletio-js.500apps.com/img/SSO/linkedin.svg" alt="" /></span>
                  <span className='pe-3'><img src="https://appletio-js.500apps.com/img/SSO/microsoft.svg" alt="" /></span>
                  <span className='sso-app'><img src="https://appletio-js.500apps.com/img/SSO/facebook.svg" alt=""/></span>
                </div>
                </form>
               
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex justify-content-center align-items-center order-1 order-lg-2">
                <img
                  src="https://i.pinimg.com/564x/77/7e/35/777e352c75c03d20857ec826bffa7fb9.jpg"
                  className="img-fluid"
                  alt="Sample"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Signup