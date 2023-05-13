import React from 'react'
import { NavLink } from 'react-router-dom'

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
                      {/* <NavLink
                      className="btn btn-outline-light btn-lg btn-rounded py-3 px-5 mb-2 mb-md-0 me-md-2"
                      to="/main/login"
                      role="button"
                      aria-controls="#picker-editor"
                    >
                      Get started
                    </NavLink>
                    <a
                      className="btn btn-link btn-lg btn-rounded py-3 px-5 mb-2 mb-md-0 text-white"
                      style={{ backgroundColor: "transparent" }}
                      href="#learn-more"
                      role="button"
                      aria-controls="#picker-editor"
                    >
                      Learn more
                    </a> */}
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
            <div className="carousel-inner">
              {/* Single item */}
              <div className="carousel-item active">
                <img
                  src="https://wpliveforms.com/wp-content/uploads/2020/10/5-Best-Form-Builder-Plugins-for-WordPress.jpg"
                  className="d-block w-100"
                  alt="Sunset Over the City"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              {/* Single item */}
              <div className="carousel-item">
                <img
                  src="https://woorise.com/wp-content/uploads/2020/08/wordpress-form-builders.png"
                  className="d-block w-100"
                  alt="Canyon at Nigh"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              {/* Single item */}
              <div className="carousel-item">
                <img
                  src="https://wpmanageninja.com/wp-content/uploads/2019/06/Why-Should-You-Use-WordPress-Form-Builder-Plugin-01.png"
                  className="d-block w-100"
                  alt="Cliff Above a Stormy Sea"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
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
      <div>
        <h3 className='text-center text-white pt-5'>About us</h3>
        <p className='text-center text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae earum aperiam nostrum facilis soluta debitis qui sint, 
          voluptas nulla tenetur omnis sequi alias nesciunt in, minus eum veritatis amet deserunt nihil, accusantium et. Nam, omnis 
          repudiandae cumque animi perspiciatis et.</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img
        src="https://cdn.shopify.com/app-store/listing_images/7919647ec002bc41691875d798fc4339/promotional_image/CKHv6LqTm_sCEAE=.png?height=720&width=1280"
        className="card-img-top"
        alt="Hollywood Sign on The Hill"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
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
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img
        src="https://cdn.educba.com/academy/wp-content/uploads/2021/08/DBMS-Concepts-1.jpg"
        className="card-img-top"
        alt="Los Angeles Skyscrapers"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content.
        </p>
      </div>
    </div>
  </div>
 
</div>

        </div>
      </>
      
    </div>
  )
}

export default Home