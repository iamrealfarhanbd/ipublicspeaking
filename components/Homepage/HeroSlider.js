
import Image from 'next/image'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
export default class HeroSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
        <div className="slide"> 
            <div className="container hedaer-inner">
                <div className="bannerText">
                    <h3>Master excellent public speaking and presentation skills today</h3>
                    <p>Become an outstanding orator nailing the foolproof hacks of our high-yielding courses.</p>
                    <p><Link href="#course" ><a className="smooth">View  Courses <i className="fa fa-angle-right"></i></a></Link></p>
                </div>
            </div>
            
            <Image  src="/assets/images/hero1.png" alt="" width={2120}  height={800} />
        </div>
        <div className="slide"> 
            <div className="container hedaer-inner">
                <div className="bannerText">
                    <h3>Advanced training from the top-notch orators worldwide</h3>
                    <p>Overcome all your public speaking fears attending our exclusive courses run by expert trainers.</p>
                    <p><Link href="#course" ><a className="smooth">View  Courses <i className="fa fa-angle-right"></i></a></Link></p>
                </div>
            </div>
            <Image  src="/assets/images/hero2.png" alt="" width={2120}  height={800} />
        </div>
         
        </Slider>
    );
  }
}