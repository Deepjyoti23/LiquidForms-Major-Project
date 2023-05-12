import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {

  const navigate = useNavigate();

	const loginForm = useFormik({
		initialValues: {
			email: '',
			password: ''
		},

		onSubmit: async (values) => {
			console.log(values);

			const res = await fetch('http://localhost:5000/user/authenticate', {
				method : 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			});
			if (res.status === 200) {
				Swal.fire({
					icon: 'success',
					title: 'Sucess',
					text: 'Logged in Successfully'
				});
        const data = await res.json();
        if(data.role === 'admin'){
          sessionStorage.setItem('admin', JSON.stringify(data));
        }else{
          navigate('/user/ManageForm');
          sessionStorage.setItem('user', JSON.stringify(data));
          navigate('/user/ManageForm');
        }

			} else {
				Swal.fire({
					icon: 'error',
					title: 'Error',
					text: 'Invalid Credentials'
				});
			}
		}
	})

  return (
    <div className=" vh-100 " style={{backgroundColor:"#f0fbff"}} >
  <div className="container py-4 h-90">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-9">
        <div
          className="card"style={{ borderRadius: 25 }}>
          <div className="row g-0 ">
            <div className="col-md-7 col-lg-7 d-none d-md-block" style={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: "url('https://cdn.wedevs.com/uploads/2019/09/455.-How-should-a-form-builder-plugin-work-in-2019.png')"}}>
            </div>
            <div className="col-md-5 col-lg-5 d-flex align-items-center">
              <div
                className="card-body pe-4 ps-4 pb-4 text-black card-log-bg"
               
              >
                {/* <div class="card p-4" > */}
                <form onSubmit={loginForm.handleSubmit}>
                  <div className="d-flex align-items-center mb-2 ">
                    <img src="/form.png" alt="" height={140} className='d-block m-auto '/>
                  </div>
                  <div>
                    <h4 className="h2 liquid-font mb-3 d-flex justify-content-center fw-bold" style={{color:"rgb(2 2 88)"}}>Liquid Forms</h4>
                  </div>
                  <div>
                    <h5 className=" mb-1 pb-2" style={{ letterSpacing: 1 }}>
                      Sign in
                    </h5>
                  </div>
                  <div className=" mb-2">
                    <input
                      type="email"
                      id="email"
                      onChange={loginForm.handleChange}
											value={loginForm.values.email}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="">
                      Email address
                    </label>
                  </div>
                  <div className="mb-2">
                    <input
                      type="password"
                      id="password"
                      onChange={loginForm.handleChange}
											value={loginForm.values.password}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="">
                      Password
                    </label>
                  </div>
                  <div className="pt-1 mb-4 d-grid col mx-auto">
                    <button
                      className="btn btn-lg text-white"
                      style={{ backgroundColor: "rgb(2 2 88)" }}
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <div className='d-flex justify-content-center'>

                  <a className="small text-dark" href="#!">
                    Forgot password?
                  </a>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <p className="mb-3 pb-lg-2" style={{ color: "rgb(1 15 244)" }}>
                    Don't have an account?{" "}
                    <a href="/main/sign" className='fw-bold' style={{ color: "rgb(1 15 244)" }}>
                      Register here
                    </a>
                  </p>
                  </div>
                  {/* <div class="d-flex justify-content-center text-center mt-4 pt-1">
                          <button type="button" class="btn btn-primary btn-floating mx-1">
                            <i class="fas fa-facebook    "></i>
                          </button>
              
                          <button type="button" class="btn btn-primary btn-floating mx-1">
                            <i class="fab fa-twitter"></i>
                          </button>  
                        </div> */}
                  <a href="#!" className="small  text-muted">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login