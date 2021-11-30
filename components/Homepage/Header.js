import HeroSlider from './HeroSlider'

const Header = () => {

    return (
        <header>
           <div className="header_v2">
      <div className="banner row" id="banner">
        <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12 noPadd slides-container" style={{height:'100%'}}> 
          
          <HeroSlider/>
        

          
        </div>
      </div>
    </div>
    <div className="container form-header">
      <div className="form-container">
        <h2>Become a member<span>Get instant access to 4500 video courses</span></h2>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-row">
            <input type="text" placeholder="First name" className="normal small"/>
            <input type="text" placeholder="Last name" className="normal small last"/>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-row">
            <input type="text" placeholder="Email Address" className="normal"/>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-row">
            <select className="normal">
              <option> Select Learning Program</option>
            </select>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-row">
            <textarea placeholder="Detail information" className="normal medium"></textarea>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <input type="button" className="button" value="Request Information"/>
          </div>
        </div>
      </div>
    </div>
    
        </header>
    )
}

export default Header