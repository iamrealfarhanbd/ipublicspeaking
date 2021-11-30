
const Nav = () => {

    return (
        <nav>
        <div className="container">
        <div className="row relative">
          <ul className="language">
            <li> <a href="#" data-toggle="dropdown">English</a><i className="fa fa-caret-down"></i>
              <ul className="dropdown-menu" role="menu">
                <li><a href="#" className="french">French</a></li>
                <li><a href="#" className="italian">Italian</a></li>
                <li><a href="#" className="spanish">Spanish</a></li>
                <li><a href="#" className="portuguese">Portuguese</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu">
        <div className="navbar-wrapper">
          <div className="container"> 
            <div className="navwrapper">
              <div className="navbar navbar-inverse navbar-static-top">
                <div className="container">
                  <div className="logo"><a href="#"><span className="img-circle">e</span>learn</a> </div>
                  <nav className="navArea">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                    </div>
                    <div className="navbar-collapse collapse">
                      <ul className="nav navbar-nav" id="navigation">
                        <li className="menuItem" id="home"><a href="#wrapper">Home</a></li>
                        <li className="menuItem"><a href="#features">features</a></li>
                        <li className="menuItem"><a href="#courses">courses</a></li>
                        <li className="menuItem"><a href="#teachers">teachers</a></li>
                        <li className="menuItem"><a href="#pricing">pricing</a></li>
                        <li className="menuItem"><a href="#testimonial">Testimonial</a></li>
                        <li><a href="blog-medium-image.html">blog</a></li>
                        <li className="menuItem"><a href="#contact">Contact</a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>

    )
}

export default Nav