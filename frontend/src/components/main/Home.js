import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Home = () => {
  return (
    <div style={{ backgroundColor: "rgb(2 2 88)" }}>

      <div className="container pt-0" >
        <section >
          {/* Background image */}
          <div className="px-4  px-md-5 text-center " aria-controls="#picker-editor"
          >
            <div>
              <div className=" h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-lg-10">
                    <div className="text-white ">
                      <h1 className="my-md-5 mb- px-5 display-3 fw-bold ls-tight">
                        <span>Customize forms effortlessly with Liquid Forms</span> <br />
                        <span className="h2">Tailor made solutions for your unique needs</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
      {/**/}

      <>
        <div className='container '>
          {/* Carousel wrapper */}

          <div
            id="carouselBasicExample"
            className="carousel slide carousel-fade"
            data-mdb-ride="carousel"
          >
            {/* Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-mdb-target="#carouselBasicExample"
                data-mdb-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-mdb-target="#carouselBasicExample"
                data-mdb-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-mdb-target="#carouselBasicExample"
                data-mdb-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            {/* Inner */}
            <div className="carousel-inner rounded-5" >
              {/* Single item */}
              <div className="carousel-item active" data-mdb-interval="1000">
                <img
                  src="https://woorise.com/wp-content/uploads/2020/08/wordpress-form-builders.png"
                  className="d-block w-100"
                  alt="Sunset Over the City"
                />
                <div className="carousel-caption d-none d-md-block text-dark">
                  <h2 className='fw-bold'>Powerful forms get it done</h2>
                  <p className='fw-bold'>We believe the right form makes all the difference. Go from busywork to less work with powerful forms that use conditional logic, accept payments, generate reports, and automate workflows.</p>
                </div>
              </div>
              {/* Single item */}
              <div className="carousel-item"  data-mdb-interval="1000">
                <img
                  src="https://wpliveforms.com/wp-content/uploads/2020/10/5-Best-Form-Builder-Plugins-for-WordPress.jpg"
                  className="d-block w-100"
                  alt="Canyon at Nigh"
                />
                <div className="carousel-caption d-none d-md-block fw-bold text-white"  data-mdb-interval="2000">
                  <h1 className='fw-bold '>Free Online Form Builder</h1>
                  <p className='fw-bold'>Simplify the process of creating and editing forms with liquid design.</p>
                </div>
              </div>
              {/* Single item */}
              <div className="carousel-item" data-mdb-interval="1000">
                <img
                  src="https://wpmanageninja.com/wp-content/uploads/2019/06/Why-Should-You-Use-WordPress-Form-Builder-Plugin-01.png"
                  className="d-block w-100"
                  alt="Cliff Above a Stormy Sea"
                />
                <div className="carousel-caption d-none d-md-block fw-bold text-white">
                  <h2 className='fw-bold text-danger'>Create beautiful forms, surveys, and quizzes that will bring more responses.</h2>
                  {/* <p className='fw-bold'>
                  Create beautiful forms, surveys, and quizzes that will bring more responses.
                  </p> */}
                </div>
              </div>
            </div>
            {/* Inner */}
            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* Carousel wrapper */}
          <div className=" mt-5" style={{backgroundColor:"#ece8ef "}}>
            <h3 className='text-center text-dark fw-bold pt-5' style={{color:"rgb(2 2 88)"}}>About Us</h3>
            <p className='text-center text-dark mb-4 fw-bold me-4 ms-4' style={{fontFamily:"Roboto"}}>Liquid Forms is a software platform designed to enable users to create, customize, and edit various types of forms quickly and easily. This platform provides a range of features and tools to simplify the process of creating forms, including form templates, and various customization options. With Project Liquid Forms, users can create a wide variety of forms, including surveys, order forms, registration forms, contact forms, and more. The platform is also designed to be user-friendly, making it accessible to users of all technical backgrounds.</p>
            <div className="d-flex justify-content-center mb-5">
              <NavLink
                className=" btn btn-outline-light btn-lg btn-rounded py-3 px-5 mb-5  me-md-2 text-white fw-bold"
                to="/main/login"
                role="button"
                aria-controls="#picker-editor"
                style={{ backgroundColor: "rgb(2 2 88)" }}
              >
                Get started
              </NavLink>

            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3  mt-4 g-4 mb-5">
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://cdn.shopify.com/app-store/listing_images/7919647ec002bc41691875d798fc4339/promotional_image/CKHv6LqTm_sCEAE=.png?height=720&width=1280"
                  className="card-img-top"
                  alt="Hollywood Sign on The Hill"
                />
                <div className="card-body">
                  <h4 className="card-title fw-bold mb-2" style={{color:"#F50057"}}>Build the form you need</h4>
                  <p className="card-text fw-bold" style={{color:"rgb(3 3 136 / 79%)", fontFamily:"cursive"}}>
                  Create customized forms tailored to your unique needs in just minutes, without any coding or technical expertise required.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://forms.io/images/blog/best-form-builder.png?v=1682922096820053088"
                  className="card-img-top"
                  alt="Palm Springs Road"
                />
                <div className="card-body">
                  <h4 className="card-title fw-bold mb-2" style={{color:"#F50057"}}>Highly Customised forms </h4>
                  <p className="card-text fw-bold" style={{color:"rgb(3 3 136 / 79%)", fontFamily:"cursive"}}>Unlock the power of highly customizable forms tailored to your exact specifications</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/database.jpg"
                  className="card-img-top"
                  alt="Los Angeles Skyscrapers"
                />
                <div className="card-body">
                  <h4 className="card-title fw-bold mb-2" style={{color:"#F50057"}}>Easy Database</h4>
                  <p className="card-text fw-bold" style={{color:"rgb(3 3 136 / 79%)", fontFamily:"cursive"}}>
                  Enables you to leverage the advantages of different database systems and optimize your data storage strategy, ensuring efficient form management and data retrieval in a manner that aligns with your specific requirements.
                  </p>
                </div>
              </div>
            </div>

          </div>



        </div>
      </>
      < >
        {/* Footer */}
        <footer className="text-center text-lg-start bg-light text-muted mt-3" style={{ backgroundImage: "linear-gradient(360deg,#9fdbfe00,#b5d9f447)" }}>
          {/* Section: Social media */}

          <div className="mt-5">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-3">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <img className='me-2' src="/form (1).png" height={40} alt="" />
                    Liquid Forms
                  </h6>
                  <p>
                    Liquid Forms helps users to design forms according to their specific requirements, add different types of fields, customize the layout and design, and possibly integrate with other systems or platforms.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}

                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="/main/login" className="text-reset">
                      Login
                    </a>
                  </p>
                  <p>
                    <a href="/main/sign" className="text-reset">
                      Sign Up
                    </a>
                  </p>
                  <p>
                    <a href="/user/ManageForm" className="text-reset">
                      Manage forms
                    </a>
                  </p>
                  <p>

                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3" /> Lucknow, UP            </p>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    deepjyoti116@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" /> 7390973268
                  </p>

                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </div>
          {/* Section: Links  */}

        </footer>
        {/* Footer */}
      </>

    </div>
  )
}

export default Home