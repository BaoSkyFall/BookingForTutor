import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class UnAuthHome extends Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '/js/home.js';
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                <div>
  {/* Loader */}
  <div id="preloader">
    <div id="status">
      <div className="sk-chase">
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
      </div>
    </div>
  </div>
  {/*Navbar Start*/}
  <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark navbar-light">
    <div className="container">
      {/* LOGO */}
      <a className="navbar-brand logo" href="layout-one-1.html">
        <img src="images/logo-dark.png" height={21} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <i className="mdi mdi-menu" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
          <li className="nav-item active">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#pricing" className="nav-link">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#clients" className="nav-link">Clients</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Navbar End */}
  {/* Hero Start */}
  <section className="hero-4-bg position-relative d-flex align-items-center" style={{background: 'url(images/hero-4-bg.png) center center'}} id="home">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="text-dark hero-4-title font-weight-light mb-4">Creativity, To Think More <span className="font-weight-medium">Efficiently</span></h1>
          <p className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus a qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate.</p>
          <button className="btn btn-primary mt-4">Learn More <span className="ml-2 right-icon">→</span></button>
        </div>
        <div className="col-lg-4 offset-lg-2">
          <div className="hero-login-form mx-auto p-4 rounded mt-5 mt-lg-0">
            <div className="text-center">
              <p className="text-muted mb-2 f-13 text-uppercase">Welcome To DoubleB</p>
              
            </div>
            <form className="registration-form">
            <NavLink to="/login">
            <button type="submit" className="btn btn-primary btn-block btn-sm">Login <i className="mdi mdi-telegram ml-2" /></button>
                  </NavLink>          
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Hero End */}
  <section className="pt-5">
    <div className="container">
      <div className="row">
        <div className="col-md client-logo mb-4 mb-lg-0">
          <img src="images/client-logo/1.png" className="img-fluid mx-auto d-block p-4" />
        </div>
        <div className="col-md client-logo mb-4 mb-lg-0">
          <img src="images/client-logo/2.png" className="img-fluid mx-auto d-block p-4" />
        </div>
        <div className="col-md client-logo mb-4 mb-lg-0">
          <img src="images/client-logo/3.png" className="img-fluid mx-auto d-block p-4" />
        </div>
        <div className="col-md client-logo mb-4 mb-lg-0">
          <img src="images/client-logo/4.png" className="img-fluid mx-auto d-block p-4" />
        </div>
        <div className="col-md client-logo mb-4 mb-lg-0">
          <img src="images/client-logo/5.png" className="img-fluid mx-auto d-block p-4" />
        </div>
      </div>
    </div>
  </section>
  {/* Service Start */}
  <section className="section" id="services">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="text-center mb-5">
            <h4 className="text-uppercase mb-0">Awesome Service</h4>
            <div className="my-3">
              <img src="images/title-border.png" className="img-fluid mx-auto d-block" />
            </div>
            <p className="text-muted f-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="service-box p-4">
            <div className="service-icon icon-primary mb-4 mt-3">
              <i className="mdi mdi-layers-triple" />
            </div>
            <h4 className="mb-4 service-title">Creative Design</h4>
            <p className="text-muted f-15">Itaque earum rerum hic tenetur that sapiente delectus ut aut reiciendis voluptatibus consequatur alias.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-box p-4">
            <div className="service-icon icon-success mb-4 mt-3">
              <i className="mdi mdi-shield-lock-outline" />
            </div>
            <h4 className="mb-4 service-title">Data Privacy</h4>
            <p className="text-muted f-15">Itaque earum rerum hic tenetur that sapiente delectus ut aut reiciendis voluptatibus consequatur alias.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-box p-4">
            <div className="service-icon icon-danger mb-4 mt-3">
              <i className="mdi mdi-security" />
            </div>
            <h4 className="mb-4 service-title">Analytics Security</h4>
            <p className="text-muted f-15">Itaque earum rerum hic tenetur that sapiente delectus ut aut reiciendis voluptatibus consequatur alias.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-box p-4">
            <div className="service-icon icon-info mb-4 mt-3">
              <i className="mdi mdi-account-group" />
            </div>
            <h4 className="mb-4 service-title">User Friendly</h4>
            <p className="text-muted f-15">Itaque earum rerum hic tenetur that sapiente delectus ut aut reiciendis voluptatibus consequatur alias.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-box p-4">
            <div className="service-icon icon-danger mb-4 mt-3">
              <i className="mdi mdi-security" />
            </div>
            <h4 className="mb-4 service-title">Networking</h4>
            <p className="text-muted f-15">Itaque earum rerum hic tenetur that sapiente delectus ut aut reiciendis voluptatibus consequatur alias.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-box p-4">
            <div className="service-icon icon-info mb-4 mt-3">
              <i className="mdi mdi-account-group" />
            </div>
            <h4 className="mb-4 service-title">Responsive</h4>
            <p className="text-muted f-15">Itaque earum rerum hic tenetur that sapiente delectus ut aut reiciendis voluptatibus consequatur alias.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Service End */}
  {/* About us Start */}
  <section className="section bg-light" id="about">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="text-center mb-5">
            <h4 className="text-uppercase mb-0">About Us</h4>
            <div className="my-3">
              <img src="images/title-border.png" className="img-fluid mx-auto d-block" />
            </div>
            <p className="text-muted f-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-5">
          <img src="images/about-img.png" className="img-fluid mx-auto d-block" />
        </div>
        <div className="col-lg-6 offset-lg-1">
          <div className="text-muted mt-5 mt-lg-0">
            <h2 className="title mb-4">We help startups launch their products.</h2>
            <p className="mb-4 f-15">At vero eos et accusamus a iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
            <p className="mb-4 f-15">Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis.</p>
            <a href className="more-info f-15">See More Information <span className="ml-2 right-icon">→</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About us End */}
  {/* Counter Start */}
  <section className="section counter-bg">
    <div className="counter-bg-overlay" />
    <div className="container">
      <div className="row align-items-center" id="counter">
        <div className="col-lg-3 col-md-6">
          <div className="mb-4 mb-lg-0">
            <h2 className="text-white mb-4">Important Facts</h2>
            <p className="f-15 text-white-70 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
            <a href className="btn btn-light">Read More <span className="ml-2 right-icon">→</span></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="counter-box text-center px-4 py-5 mb-4 mb-lg-0">
            <div className="text-white">
              <img src="images/icon/icon-1.png" className="img-fluid mx-auto d-blok" />
              <h1 className="mb-2 mt-3"><span className="counter-value mt-4" data-count={620}>0</span>+</h1>
              <p className="mb-0 text-white-70">Successful Project</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="counter-box text-center px-4 py-5 mb-4 mb-lg-0">
            <div className="text-white">
              <img src="images/icon/icon-2.png" className="img-fluid mx-auto d-blok" />
              <h1 className="mb-2 mt-3"><span className="counter-value mt-4" data-count={1200}>0</span></h1>
              <p className="mb-0 text-white-70">Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="counter-box text-center px-4 py-5 mb-4 mb-lg-0">
            <div className="text-white">
              <img src="images/icon/icon-3.png" className="img-fluid mx-auto d-blok" />
              <h1 className="mb-2 mt-3"><span className="counter-value mt-4" data-count={450}>0</span></h1>
              <p className="mb-0 text-white-70">Awards Win</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Counter End */}

  {/* Nguoi day tieu bieu Start */}
  <section className="section bg-light" id="clients">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="text-center mb-5">
            <h4 className="text-uppercase mb-0">Tutor of this month</h4>
            <div className="my-3">
              <img src="images/title-border.png" className="img-fluid mx-auto d-block" />
            </div>
            <p className="text-muted f-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="owl-carousel owl-theme">
          <div className="item">
            <div className="testi-content text-center m-3 p-4 position-relative">
              <div className="testi-icon"><i className="mdi mdi-format-quote-open" /></div>
              <p className="text-muted mb-4 position-relative f-15">Et harum quidem that rerum facilis expedita distinctio nam at what libero tempore cum soluta nobis est eligendi.</p>
              <img src="images/users/1.jpg" className="img-fluid mx-auto d-block rounded-circle user-img" />
              <h5 className="title mb-1 mt-4">Jane Banta</h5>
              <p className="text-muted mb-2 f-15">Web Developer</p>
              <ul className="list-unstyled f-15 text-warning mb-0">
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item"><i className="mdi mdi-star" /></li>
              </ul>
            </div>
          </div>
          {/* owl item and */}
          <div className="item">
            <div className="testi-content text-center m-3 p-4 position-relative">
              <div className="testi-icon"><i className="mdi mdi-format-quote-open" /></div>
              <p className="text-muted mb-4 position-relative f-15">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum. 😍</p>
              <img src="images/users/2.jpg" className="img-fluid mx-auto d-block rounded-circle user-img" />
              <h5 className="title mb-1 mt-4">Manuel Allen</h5>
              <p className="text-muted mb-2 f-15">Graphic Designer</p>
              <ul className="list-unstyled f-15 text-warning mb-0">
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item"><i className="mdi mdi-star-outline" /></li>
              </ul>
            </div>
          </div>
          {/* owl item and */}
          <div className="item">
            <div className="testi-content text-center m-3 p-4 position-relative">
              <div className="testi-icon"><i className="mdi mdi-format-quote-open" /></div>
              <p className="text-muted mb-4 position-relative f-15">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</p>
              <img src="images/users/3.jpg" className="img-fluid mx-auto d-block rounded-circle user-img" />
              <h5 className="title mb-1 mt-4">Hattie Fuller</h5>
              <p className="text-muted mb-2 f-15">Web Designer</p>
              <ul className="list-unstyled f-15 text-warning mb-0">
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star-outline" /></li>
                <li className="list-inline-item"><i className="mdi mdi-star-outline" /></li>
              </ul>
            </div>
          </div>
          {/* owl item and */}
          <div className="item">
            <div className="testi-content text-center m-3 p-4 position-relative">
              <div className="testi-icon"><i className="mdi mdi-format-quote-open" /></div>
              <p className="text-muted mb-4 position-relative f-15">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores. 😘</p>
              <img src="images/users/4.jpg" className="img-fluid mx-auto d-block rounded-circle user-img" />
              <h5 className="title mb-1 mt-4">James Clark</h5>
              <p className="text-muted mb-2 f-15">PHP Developer</p>
              <ul className="list-unstyled f-15 text-warning mb-0">
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item"><i className="mdi mdi-star-outline" /></li>
              </ul>
            </div>
          </div>
          {/* owl item and */}
          <div className="item">
            <div className="testi-content text-center m-3 p-4 position-relative">
              <div className="testi-icon"><i className="mdi mdi-format-quote-open" /></div>
              <p className="text-muted mb-4 position-relative f-15"> Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
              <img src="images/users/5.jpg" className="img-fluid mx-auto d-block rounded-circle user-img" />
              <h5 className="title mb-1 mt-4">Marie Perkins</h5>
              <p className="text-muted mb-2 f-15">UI/UX Designer</p>
              <ul className="list-unstyled f-15 text-warning mb-0">
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item"><i className="mdi mdi-star-outline" /></li>
              </ul>
            </div>
          </div>
          {/* owl item and */}
          <div className="item">
            <div className="testi-content text-center m-3 p-4 position-relative">
              <div className="testi-icon"><i className="mdi mdi-format-quote-open" /></div>
              <p className="text-muted mb-4 position-relative f-15">Et harum quidem that rerum facilis expedita distinctio nam at what libero tempore cum soluta nobis est eligendi. 😜</p>
              <img src="images/users/6.jpg" className="img-fluid mx-auto d-block rounded-circle user-img" />
              <h5 className="title mb-1 mt-4">Daniel Clark</h5>
              <p className="text-muted mb-2 f-15">Graphic Designer</p>
              <ul className="list-unstyled f-15 text-warning mb-0">
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star-outline" /></li>
                <li className="list-inline-item"><i className="mdi mdi-star-outline" /></li>
              </ul>
            </div>
          </div>
          {/* owl item and */}
          <div className="item">
            <div className="testi-content text-center m-3 p-4 position-relative">
              <div className="testi-icon"><i className="mdi mdi-format-quote-open" /></div>
              <p className="text-muted mb-4 position-relative f-15">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores that alias consequatur.</p>
              <img src="images/users/3.jpg" className="img-fluid mx-auto d-block rounded-circle user-img" />
              <h5 className="title mb-1 mt-4">Helen Jones</h5>
              <p className="text-muted mb-2 f-15">Web Designer</p>
              <ul className="list-unstyled f-18 text-warning mb-0">
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item mr-1"><i className="mdi mdi-star" /></li>
                <li className="list-inline-item"><i className="mdi mdi-star-outline" /></li>
              </ul>
            </div>
          </div>
          {/* owl item and */}
        </div>
      </div>
    </div>
  </section>
  {/* Clients End */}
  {/* contact Us Start */}
  <section className="section" id="contact">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="text-center mb-5">
            <h4 className="text-uppercase mb-0">Get In Touch</h4>
            <div className="my-3">
              <img src="images/title-border.png" className="img-fluid mx-auto d-block" />
            </div>
            <p className="text-muted f-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="contact-address">
            <h4 className="title mb-4">Contact Info</h4>
            <p className="text-muted f-15">Sed perspici unade omnis natus error sit voluptatem accusantium doloremque minus cumque.</p>
            <p className="text-muted f-15 mb-4">Et harum quidem rerum facilis est et expedita sit distinctio at libero.</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="contact-address">
                <h5 className="title f-18">Address - A</h5>
                <p className="text-muted f-15">3165 Roosevelt Wilson Riverside, CA 92507</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-address">
                <h5 className="title f-18">Address - B</h5>
                <p className="text-muted f-15">1121 Bombardier Way Southfield, MI 48075</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 offset-lg-1">
          <div className="custom-form mt-4 mt-lg-0">
            <div id="message" />
            <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group app-label">
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text" className="form-control" placeholder="Enter your name.." />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group app-label">
                    <label htmlFor="email">Email address</label>
                    <input name="email" id="email" type="email" className="form-control" placeholder="Enter your email.." />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group app-label">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" className="form-control" id="subject" placeholder="Enter Subject.." />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group app-label">
                    <label htmlFor="comments">Message</label>
                    <textarea name="comments" id="comments" rows={3} className="form-control" placeholder="Enter message.." defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message <i className="mdi mdi-telegram ml-2" /></button>
                  <div id="simple-msg" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* contact Us End */}
  {/* Footer Start */}
  <section className="footer">
    <div className="container">
      <div className="row mb-4">
        <div className="col-lg-4 col-sm-6">
          <div className="mb-4">
            <a href="layout-one-1.html"><img src="images/logo-light.png" className="logo-light" height={22} /></a>
            <a href="layout-one-1.html"><img src="images/logo-dark.png" className="logo-dark" height={22} /></a>
          </div>
          <p className="footer-desc f-15">Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus.</p>
          <ul className="footer-icons list-inline f-20 mb-0 mt-4">
            <li className="list-inline-item mr-3"><a href="#" className><i className="mdi mdi-facebook" /></a></li>
            <li className="list-inline-item mr-3"><a href="#" className><i className="mdi mdi-twitter" /></a></li>
            <li className="list-inline-item mr-3"><a href="#" className><i className="mdi mdi-instagram" /></a></li>
            <li className="list-inline-item"><a href="#" className><i className="mdi mdi-linkedin" /></a></li>
          </ul>
        </div>
        <div className="col-lg-7 offset-lg-1">
          <div className="row mt-lg-0">
            <div className="col-md-4 mt-4 mt-lg-0">
              <h5 className="footer-list-title f-18 font-weight-normal mb-3">Customer</h5>
              <ul className="list-unstyled company-sub-menu">
                <li><a href>Buyer</a></li>
                <li><a href>Supplier</a></li>
              </ul>
            </div>
            <div className="col-md-4 mt-4 mt-lg-0">
              <h5 className="footer-list-title f-18 font-weight-normal mb-3">Company</h5>
              <ul className="list-unstyled company-sub-menu">
                <li><a href>About</a></li>
                <li><a href>Service</a></li>
                <li><a href>Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4 mt-4 mt-lg-0">
              <h5 className="footer-list-title f-18 font-weight-normal mb-3">Further Information</h5>
              <ul className="list-unstyled company-sub-menu">
                <li><a href>Term &amp; Condition</a></li>
                <li><a href>Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mt-3">
          <div className="text-center footer-alt my-3">
            <p className="f-15">2019 © DoubleB. Design by Themesdesign</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer End */}
</div>

            </div>
        )
    }
}
